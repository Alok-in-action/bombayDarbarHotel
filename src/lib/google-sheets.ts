import { readFileSync } from 'fs';
import { join } from 'path';
import type { MenuCategory, MenuItem } from './menu-data';

const SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQITD0nN1qkE-jHb_9DnHYoU35cnoAh4pPCDMGJMRqvyVIk-bY_XJYjGztX5UxBwrhOCEPUyOmGMuBK/pub?gid=1091158203&single=true&output=csv';

/**
 * Minimum number of items we expect in a healthy sheet fetch.
 * If the sheet returns fewer than this, we treat it as a corrupted / partial fetch
 * and fall back to the local snapshot instead.
 */
const MIN_EXPECTED_ITEMS = 100;

// ─── Tier 2: Local JSON snapshot ─────────────────────────────────────────────

/**
 * Load the locally committed menu-snapshot.json.
 * This file is a full backup generated from the CSV at the time of last
 * intentional update. It is committed to git so it is always available.
 */
function loadLocalSnapshot(): MenuCategory[] {
  try {
    const filePath = join(process.cwd(), 'data', 'menu-snapshot.json');
    const raw = readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw) as MenuCategory[];
    console.log(`[menu] ✅ Loaded local snapshot: ${data.length} categories`);
    return data;
  } catch (err) {
    console.error('[menu] ⚠️  Could not load local snapshot:', err);
    return [];
  }
}

// ─── CSV parser ───────────────────────────────────────────────────────────────

/** Parse a single CSV line, handling quoted fields with embedded commas. */
function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

// ─── CSV → MenuCategory[] transformer ────────────────────────────────────────

function csvToMenuCategories(csvText: string): MenuCategory[] {
  const lines = csvText.split(/\r?\n/).filter((l) => l.trim() !== '');
  if (lines.length < 2) return [];

  const categoryMap = new Map<string, MenuCategory>();

  for (const line of lines.slice(1)) { // skip header
    const [category_id, category_name, item_name, description, price, type, popular] =
      parseCsvLine(line);

    if (!category_id || !item_name) continue;

    const menuItem: MenuItem = {
      name: item_name,
      description: description || '',
      price: price || '',
      type: type?.toLowerCase() === 'non-veg' ? 'non-veg' : 'veg',
      popular: popular?.toUpperCase() === 'TRUE' ? true : undefined,
    };

    if (!categoryMap.has(category_id)) {
      categoryMap.set(category_id, {
        id: category_id,
        name: category_name,
        items: [],
      });
    }
    categoryMap.get(category_id)!.items.push(menuItem);
  }

  return Array.from(categoryMap.values());
}

// ─── Main export ──────────────────────────────────────────────────────────────

/**
 * Fetch the live menu from Google Sheets.
 *
 * Fallback chain:
 *   1. Google Sheet (live, revalidated every 60 s via ISR)
 *   2. data/menu-snapshot.json (committed backup — safe from accidental deletes)
 *   3. menu-data.ts (hardcoded ultimate fallback — used by the caller)
 *
 * Returns an empty array only if both tiers 1 and 2 fail, so the caller
 * can fall back to the hardcoded menu-data.ts.
 */
export async function fetchMenuFromSheet(): Promise<MenuCategory[]> {
  // ── Tier 1: Google Sheet ──────────────────────────────────────────────────
  try {
    const res = await fetch(SHEET_CSV_URL, {
      next: { revalidate: 60 }, // ISR: refresh every 60 seconds
    });

    if (!res.ok) {
      console.error(`[menu] ❌ Sheet fetch failed: ${res.status} ${res.statusText}`);
      throw new Error('bad_response');
    }

    const text = await res.text();
    const categories = csvToMenuCategories(text);
    const totalItems = categories.reduce((sum, c) => sum + c.items.length, 0);

    if (totalItems < MIN_EXPECTED_ITEMS) {
      console.warn(
        `[menu] ⚠️  Sheet returned only ${totalItems} items (expected ≥ ${MIN_EXPECTED_ITEMS}). ` +
        `Possible accidental deletion — falling back to local snapshot.`
      );
      throw new Error('too_few_items');
    }

    console.log(`[menu] ✅ Loaded from Google Sheet: ${categories.length} categories, ${totalItems} items`);
    return categories;

  } catch {
    // ── Tier 2: Local JSON snapshot ─────────────────────────────────────────
    const snapshot = loadLocalSnapshot();
    if (snapshot.length > 0) return snapshot;

    // ── Tier 3: Caller falls back to menu-data.ts ────────────────────────────
    console.error('[menu] ❌ Both sheet and snapshot failed. Caller will use hardcoded fallback.');
    return [];
  }
}
