import { MenuPage } from '@/components/menu-page';
import { menuData as fallbackMenuData } from '@/lib/menu-data';
import { fetchMenuFromSheet } from '@/lib/google-sheets';

// Revalidate this page every 60 seconds (ISR).
// Any change you make in the Google Sheet will appear on the site within 60s.
export const revalidate = 60;

export default async function Home() {
  // Try to load live data from Google Sheets; fall back to the static menu if it fails.
  const sheetData = await fetchMenuFromSheet();
  const menuData = sheetData.length > 0 ? sheetData : fallbackMenuData;

  return (
    <main>
      <MenuPage menuData={menuData} />
    </main>
  );
}
