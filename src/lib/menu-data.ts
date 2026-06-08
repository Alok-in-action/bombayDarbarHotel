export interface MenuItem {
  name: string;
  description: string;
  price: string;
  type: 'veg' | 'non-veg';
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  // ── REFRESHMENTS ────────────────────────────────────────────────────────────
  {
    id: 'beverages_hot',
    name: 'Hot Beverages',
    items: [
      { name: 'Green Tea',   description: '', price: '20', type: 'veg' },
      { name: 'Special Tea', description: '', price: '25', type: 'veg' },
      { name: 'Lemon Tea',   description: '', price: '15', type: 'veg' },
      { name: 'Hot Coffee',  description: '', price: '40', type: 'veg' },
    ],
  },
  {
    id: 'beverages_cold',
    name: 'Cold Beverages',
    items: [
      { name: 'Virgin Mojito', description: '', price: '80', type: 'veg' },
      { name: 'Buttermilk',    description: '', price: '15', type: 'veg' },
      { name: 'Lassi',         description: '', price: '40', type: 'veg' },
      { name: 'Lemonade',      description: '', price: '30', type: 'veg' },
      { name: 'Cold Coffee',   description: '', price: '80', type: 'veg' },
    ],
  },
  // ── SALADS ──────────────────────────────────────────────────────────────────
  {
    id: 'salads',
    name: 'Salads',
    items: [
      { name: 'Green Salad',  description: '', price: '50',  type: 'veg' },
      { name: 'Tomato Salad', description: '', price: '40',  type: 'veg' },
      { name: 'Raitha Salad', description: '', price: '50',  type: 'veg' },
      { name: 'Onion Salad',  description: '', price: '30',  type: 'veg' },
      { name: 'Fruit Salad',  description: '', price: '120', type: 'veg' },
    ],
  },
  // ── SOUPS ───────────────────────────────────────────────────────────────────
  {
    id: 'soups_veg',
    name: 'Veg Soups',
    items: [
      { name: 'Cream of Tomato Soup', description: '', price: '100', type: 'veg' },
      { name: 'Veg Clear Soup',       description: '', price: '90',  type: 'veg' },
      { name: 'Veg Manchow Soup',     description: '', price: '90',  type: 'veg' },
      { name: 'Sweet Corn Soup',      description: '', price: '105', type: 'veg' },
    ],
  },
  {
    id: 'soups_non_veg',
    name: 'Non-Veg Soups',
    items: [
      { name: 'Chicken Clear Soup',   description: '', price: '120', type: 'non-veg' },
      { name: 'Chicken Manchow Soup', description: '', price: '120', type: 'non-veg' },
    ],
  },
  // ── PAPAD ───────────────────────────────────────────────────────────────────
  {
    id: 'papad',
    name: 'Papad',
    items: [
      { name: 'Masala Papad',         description: '', price: '20', type: 'veg' },
      { name: 'Fry Masala Papad',     description: '', price: '20', type: 'veg' },
      { name: 'Roasted Masala Papad', description: '', price: '20', type: 'veg' },
      { name: 'Plain Fried Papad',    description: '', price: '15', type: 'veg' },
      { name: 'Plain Roasted Papad',  description: '', price: '15', type: 'veg' },
    ],
  },
  // ── SANDWICHES ──────────────────────────────────────────────────────────────
  {
    id: 'veg_sandwich',
    name: 'Veg Sandwiches',
    items: [
      { name: 'Veg Sandwich',                description: '', price: '70',  type: 'veg' },
      { name: 'Veg Club Sandwich',           description: '', price: '120', type: 'veg' },
      { name: 'Veg Grilled Sandwich',        description: '', price: '80',  type: 'veg' },
      { name: 'Veg Cheese Grilled Sandwich', description: '', price: '',    type: 'veg' },
    ],
  },
  {
    id: 'non_veg_sandwich',
    name: 'Non-Veg Sandwiches',
    items: [
      { name: 'Chicken Sandwich',               description: '', price: '100', type: 'non-veg' },
      { name: 'Chicken Club Sandwich',          description: '', price: '120', type: 'non-veg' },
      { name: 'Chicken Grilled Sandwich',       description: '', price: '140', type: 'non-veg' },
      { name: 'Chicken Cheese Grilled Sandwich',description: '', price: '130', type: 'non-veg' },
    ],
  },
  // ── FRIED SNACKS ────────────────────────────────────────────────────────────
  {
    id: 'fried_snacks',
    name: 'Fried Snacks',
    items: [
      { name: 'Chana Lehsun Fry', description: '', price: '220', type: 'veg' },
      { name: 'Oats',             description: '', price: '180', type: 'veg' },
      { name: 'Masala Oats',      description: '', price: '200', type: 'veg' },
      { name: 'Peanut Chat',      description: '', price: '280', type: 'veg' },
      { name: 'Peanut Fry',       description: '', price: '220', type: 'veg' },
    ],
  },
  // ── FRITTERS ────────────────────────────────────────────────────────────────
  {
    id: 'fritters',
    name: 'Fritters',
    items: [
      { name: 'Onion Pakora',  description: '', price: '80',  type: 'veg' },
      { name: 'Paneer Pakora', description: '', price: '180', type: 'veg' },
      { name: 'Chicken Pakora',description: '', price: '240', type: 'non-veg' },
      { name: 'French Fries',  description: '', price: '120', type: 'veg' },
      { name: 'Aloo Tikkies',  description: '', price: '100', type: 'veg' },
      { name: 'Crispy Corn',   description: '', price: '180', type: 'veg' },
      { name: 'Ring Onion',    description: '', price: '80',  type: 'veg' },
      { name: 'Mirchi Pakora', description: '', price: '60',  type: 'veg' },
      { name: 'Fish Pakora',   description: '', price: '280', type: 'non-veg' },
    ],
  },
  // ── VEG STARTERS ─────────────────────────────────────────────────────────────
  {
    id: 'veg_starter_tikka',
    name: 'Veg Starter – Tikka',
    items: [
      { name: 'Paneer Tikka',          description: '', price: '260', type: 'veg', popular: true },
      { name: 'Paneer Pahadi Tikka',   description: '', price: '230', type: 'veg' },
      { name: 'Paneer Schezwan Tikka', description: '', price: '220', type: 'veg' },
      { name: 'Paneer Reshmi Tikka',   description: '', price: '220', type: 'veg' },
      { name: 'Paneer Malai Tikka',    description: '', price: '280', type: 'veg' },
      { name: 'Mushroom Tikka',        description: '', price: '240', type: 'veg' },
    ],
  },
  {
    id: 'veg_starter_fried',
    name: 'Veg Starter – Fried',
    items: [
      { name: 'Hara Bhara Kabab',                    description: '', price: '200', type: 'veg' },
      { name: 'Veg Mayonnaise Kabab',                description: '', price: '210', type: 'veg' },
      { name: 'Veg Pahadi Kabab',                    description: '', price: '170', type: 'veg' },
      { name: 'Veg Spring Roll (Paneer Stuffing)',   description: '', price: '180', type: 'veg' },
      { name: 'Veg Spring Roll (Noodles Stuffing)',  description: '', price: '150', type: 'veg' },
      { name: 'Paneer Finger',                       description: '', price: '230', type: 'veg' },
      { name: 'Veg Cutlets',                         description: '', price: '170', type: 'veg' },
      { name: 'Hara Bhara Kabab Paneer',             description: '', price: '260', type: 'veg' },
      { name: 'Paneer Kandi',                        description: '', price: '280', type: 'veg' },
      { name: 'Paneer Sizzler',                      description: '', price: '470', type: 'veg' },
      { name: 'Veg Malai Kulfi',                     description: '', price: '210', type: 'veg' },
      { name: 'Veg Lolipop',                         description: '', price: '220', type: 'veg' },
    ],
  },
  {
    id: 'veg_starter_chinese',
    name: 'Veg Starter – Chinese',
    items: [
      { name: 'Honey Chilli Potato',        description: '', price: '180', type: 'veg', popular: true },
      { name: 'Chilli Potato',              description: '', price: '160', type: 'veg' },
      { name: 'Paneer 65 Dry',              description: '', price: '220', type: 'veg' },
      { name: 'Paneer Schezwan Dry',        description: '', price: '240', type: 'veg' },
      { name: 'Paneer Crispy',              description: '', price: '210', type: 'veg' },
      { name: 'Chilli Paneer',              description: '', price: '230', type: 'veg' },
      { name: 'Paneer Manchurian',          description: '', price: '240', type: 'veg' },
      { name: 'Gobhi Manchurian',           description: '', price: '220', type: 'veg' },
      { name: 'Gobhi Chilli',               description: '', price: '240', type: 'veg' },
      { name: 'Mushroom Chilli',            description: '', price: '240', type: 'veg' },
      { name: 'Dragon Paneer',              description: '', price: '300', type: 'veg' },
      { name: 'Mix Veg Sizzler',            description: '', price: '320', type: 'veg' },
      { name: 'Veg Manchurian Dry',         description: '', price: '140', type: 'veg' },
      { name: 'Veg Manchurian Semi Gravy',  description: '', price: '160', type: 'veg' },
    ],
  },
  // ── PARATHAS ─────────────────────────────────────────────────────────────────
  {
    id: 'parathas',
    name: 'Parathas',
    items: [
      { name: 'Aloo Paratha',   description: '', price: '50', type: 'veg' },
      { name: 'Paneer Paratha', description: '', price: '70', type: 'veg' },
      { name: 'Lachha Paratha', description: '', price: '40', type: 'veg' },
      { name: 'Onion Paratha',  description: '', price: '40', type: 'veg' },
    ],
  },
  // ── VEG MAIN COURSE ──────────────────────────────────────────────────────────
  {
    id: 'veg_main_course',
    name: 'Veg Main Course – Indian',
    items: [
      { name: 'Soya Chaap',          description: '', price: '260', type: 'veg' },
      { name: 'Mushroom Masala',     description: '', price: '230', type: 'veg' },
      { name: 'Bhindi Masala',       description: '', price: '220', type: 'veg' },
      { name: 'Mushroom Do Pyaza',   description: '', price: '220', type: 'veg' },
      { name: 'Shahi Bhindi',        description: '', price: '280', type: 'veg' },
      { name: 'Veg Kolhapuri',       description: '', price: '240', type: 'veg' },
      { name: 'Matar Mushroom',      description: '', price: '240', type: 'veg' },
      { name: 'Veg Singapuri',       description: '', price: '180', type: 'veg' },
      { name: 'Aloo Jeera',          description: '', price: '170', type: 'veg' },
      { name: 'Bhindi Do Pyaza',     description: '', price: '260', type: 'veg' },
      { name: 'Shahi Kaju',          description: '', price: '210', type: 'veg' },
      { name: 'Kaju Paneer',         description: '', price: '220', type: 'veg' },
      { name: 'Mix Veg',             description: '', price: '170', type: 'veg' },
      { name: 'Chana Masala',        description: '', price: '240', type: 'veg' },
      { name: 'Kaju Curry',          description: '', price: '270', type: 'veg' },
      { name: 'Sev Tamatar',         description: '', price: '170', type: 'veg' },
      { name: 'Sev Doodh',           description: '', price: '280', type: 'veg' },
      { name: 'Dal Fry',             description: '', price: '140', type: 'veg' },
      { name: 'Dal Tadka',           description: '', price: '160', type: 'veg' },
      { name: 'Dal Makhni',          description: '', price: '270', type: 'veg', popular: true },
      { name: 'Dal Khichdi',         description: '', price: '140', type: 'veg' },
      { name: 'Veg Thali',           description: '', price: '160', type: 'veg' },
      { name: 'Paneer Lajawab',      description: '', price: '280', type: 'veg' },
      { name: 'Paneer Lababdar',     description: '', price: '300', type: 'veg' },
      { name: 'Paneer Indori',       description: '', price: '280', type: 'veg' },
      { name: 'Paneer Punjabi',      description: '', price: '280', type: 'veg' },
      { name: 'Paneer Angara',       description: '', price: '230', type: 'veg' },
      { name: 'Paneer Toofani',      description: '', price: '280', type: 'veg' },
      { name: 'Paneer Mirch',        description: '', price: '280', type: 'veg' },
      { name: 'Paneer Chatpata',     description: '', price: '260', type: 'veg' },
      { name: 'Paneer Haryali',      description: '', price: '280', type: 'veg' },
      { name: 'Kadhai Paneer',       description: '', price: '260', type: 'veg' },
      { name: 'Paneer Kashmiri',     description: '', price: '280', type: 'veg' },
      { name: 'Makhan Paneer',       description: '', price: '260', type: 'veg' },
      { name: 'Paneer Tikka Masala', description: '', price: '270', type: 'veg' },
      { name: 'Paneer Masala Kofta', description: '', price: '260', type: 'veg' },
      { name: 'Paneer Malai Kofta',  description: '', price: '290', type: 'veg' },
      { name: 'Palak Paneer',        description: '', price: '300', type: 'veg' },
      { name: 'Matar Paneer',        description: '', price: '390', type: 'veg' },
      { name: 'Paneer Sizzler',      description: '', price: '300', type: 'veg' },
    ],
  },
  // ── VEG CHINESE MAIN COURSE ───────────────────────────────────────────────────
  {
    id: 'veg_fried_rice',
    name: 'Chinese Fried Rice',
    items: [
      { name: 'Veg Fried Rice',            description: '', price: '120', type: 'veg' },
      { name: 'Veg Schezwan Fried Rice',   description: '', price: '130', type: 'veg' },
      { name: 'Veg Triple Fried Rice',     description: '', price: '180', type: 'veg' },
      { name: 'Veg Manchurian Fried Rice', description: '', price: '180', type: 'veg' },
      { name: 'Veg Hong Kong Fried Rice',  description: '', price: '160', type: 'veg' },
      { name: 'Veg Singapore Rice',        description: '', price: '470', type: 'veg' },
      { name: 'Paneer Fried Rice',         description: '', price: '180', type: 'veg' },
    ],
  },
  {
    id: 'veg_noodles',
    name: 'Noodles',
    items: [
      { name: 'Veg Noodles Bhel',       description: '', price: '90',  type: 'veg' },
      { name: 'Veg Noodles',            description: '', price: '120', type: 'veg' },
      { name: 'Veg Schezwan Noodles',   description: '', price: '125', type: 'veg' },
      { name: 'Veg Triple Noodles',     description: '', price: '200', type: 'veg' },
      { name: 'Veg Manchurian Noodles', description: '', price: '150', type: 'veg' },
    ],
  },
  // ── BIRYANI & PULAO (VEG) ───────────────────────────────────────────────────
  {
    id: 'veg_biryani_pulao',
    name: 'Veg Biryani & Pulao',
    items: [
      { name: 'Veg Biryani',              description: '', price: '160', type: 'veg' },
      { name: 'Mushroom Biryani',         description: '', price: '190', type: 'veg' },
      { name: 'Paneer Dum Biryani',       description: '', price: '210', type: 'veg' },
      { name: 'Paneer Hyderabadi Biryani',description: '', price: '220', type: 'veg' },
      { name: 'Veg Pulao',               description: '', price: '180', type: 'veg' },
      { name: 'Paneer Khafsa',           description: '', price: '600', type: 'veg' },
      { name: 'Manchurian Biryani',      description: '', price: '230', type: 'veg' },
    ],
  },
  // ── BREADS ───────────────────────────────────────────────────────────────────
  {
    id: 'breads',
    name: 'Breads',
    items: [
      { name: 'Chapati',              description: '', price: '12', type: 'veg' },
      { name: 'Chapati Butter',       description: '', price: '15', type: 'veg' },
      { name: 'Tandoori Roti',        description: '', price: '15', type: 'veg' },
      { name: 'Tandoori Butter Roti', description: '', price: '20', type: 'veg' },
      { name: 'Butter Naan',          description: '', price: '25', type: 'veg' },
      { name: 'Garlic Naan',          description: '', price: '30', type: 'veg' },
      { name: 'Garlic Naan Butter',   description: '', price: '35', type: 'veg' },
      { name: 'Mughlai Naan',         description: '', price: '40', type: 'veg' },
    ],
  },
  // ── RICE ─────────────────────────────────────────────────────────────────────
  {
    id: 'rice',
    name: 'Rice',
    items: [
      { name: 'Jeera Rice',  description: '', price: '120', type: 'veg' },
      { name: 'Plain Rice',  description: '', price: '100', type: 'veg' },
      { name: 'Steam Rice',  description: '', price: '100', type: 'veg' },
      { name: 'Curd Rice',   description: '', price: '140', type: 'veg' },
    ],
  },
  // ── NON-VEG STARTERS ─────────────────────────────────────────────────────────
  {
    id: 'chicken_starter_tandoori',
    name: 'Non-Veg Starter – Tandoori',
    items: [
      { name: 'Chicken Burrah',         description: '', price: '450', type: 'non-veg' },
      { name: 'Lemon Chicken',          description: '', price: '430', type: 'non-veg' },
      { name: 'Chicken Malai Tandoori', description: '', price: '460', type: 'non-veg' },
      { name: 'Chicken Pahadi Tikka',   description: '', price: '200', type: 'non-veg' },
      { name: 'Chicken Tikka',          description: '', price: '220', type: 'non-veg', popular: true },
      { name: 'Chicken Tiranga Tikka',  description: '', price: '220', type: 'non-veg' },
      { name: 'Chicken Tandoori',       description: '', price: '',    type: 'non-veg' },
      { name: 'Tandoori Leg Pieces',    description: 'Half ₹200 (3 pcs) / Full ₹370 (5 pcs)', price: '200', type: 'non-veg' },
      { name: 'Tandoori Thighs',        description: '', price: '',    type: 'non-veg' },
    ],
  },
  {
    id: 'chicken_starter_chinese',
    name: 'Non-Veg Starter – Chinese',
    items: [
      { name: 'Chicken Schezwan Dry',        description: '', price: '220', type: 'non-veg' },
      { name: 'Chicken Lollipop Dry',        description: '', price: '240', type: 'non-veg', popular: true },
      { name: 'Chicken Lollipop Semi Gravy', description: '', price: '260', type: 'non-veg' },
      { name: 'Chicken Crispy Dry',          description: '', price: '240', type: 'non-veg' },
      { name: 'Dragon Chicken Dry',          description: '', price: '300', type: 'non-veg' },
      { name: 'Chicken Manchurian Dry',      description: '', price: '260', type: 'non-veg' },
      { name: 'Chilli Chicken Dry',          description: '', price: '210', type: 'non-veg' },
      { name: 'Chicken 65 Dry',             description: '', price: '215', type: 'non-veg' },
    ],
  },
  // ── NON-VEG MAIN COURSE ───────────────────────────────────────────────────────
  {
    id: 'chicken_boneless',
    name: 'Chicken Boneless',
    items: [
      { name: 'Chicken Banjara',              description: '', price: '400', type: 'non-veg' },
      { name: 'Chicken Kali Mirch',           description: '', price: '340', type: 'non-veg' },
      { name: 'Chicken Bhuna',                description: '', price: '300', type: 'non-veg' },
      { name: 'Chicken Keema',                description: '', price: '280', type: 'non-veg' },
      { name: 'Chicken Lucknowee',            description: '', price: '560', type: 'non-veg' },
      { name: 'Chicken Afghani',              description: '', price: '300', type: 'non-veg' },
      { name: 'Chicken Tabba Gosht',          description: '', price: '290', type: 'non-veg' },
      { name: 'Chicken Haryali',              description: '', price: '280', type: 'non-veg' },
      { name: 'Tawa Chicken',                 description: '', price: '260', type: 'non-veg' },
      { name: 'Butter Chicken',               description: '', price: '265', type: 'non-veg', popular: true },
      { name: 'Chicken Chatpata',             description: '', price: '300', type: 'non-veg' },
      { name: 'Chicken Patiyala',             description: '', price: '360', type: 'non-veg' },
      { name: 'Chicken Mirch',                description: '', price: '275', type: 'non-veg' },
      { name: 'Chicken Toofani',              description: '', price: '280', type: 'non-veg' },
      { name: 'Chicken Angara',               description: '', price: '300', type: 'non-veg' },
      { name: 'Chicken Lazeez',               description: '', price: '285', type: 'non-veg' },
      { name: 'Chicken Punjabi',              description: '', price: '300', type: 'non-veg' },
      { name: 'Chicken Lajawab',              description: '', price: '295', type: 'non-veg' },
      { name: 'Special Bombay Chicken Curry', description: '', price: '300', type: 'non-veg' },
    ],
  },
  {
    id: 'chicken_bone',
    name: 'Chicken Bone Items',
    items: [
      { name: 'Chicken Changezi',       description: 'Half ₹320 | Full ₹550', price: '320', type: 'non-veg' },
      { name: 'Chicken Makhni',         description: 'Half ₹330 | Full ₹570', price: '330', type: 'non-veg', popular: true },
      { name: 'Chicken Peshawari',      description: 'Half ₹310 | Full ₹540', price: '310', type: 'non-veg' },
      { name: 'Tawa Chicken',           description: 'Half ₹300 | Full ₹520', price: '300', type: 'non-veg' },
      { name: 'Chicken Mughlai',        description: 'Half ₹380 | Full ₹460', price: '380', type: 'non-veg' },
      { name: 'Chicken Tikka Masala',   description: 'Half ₹240 | Full ₹400', price: '240', type: 'non-veg' },
      { name: 'Palak Chicken',          description: 'Half ₹210 | Full ₹370', price: '210', type: 'non-veg' },
      { name: 'Chicken Makhanwala',     description: 'Half ₹260 | Full ₹400', price: '260', type: 'non-veg' },
      { name: 'Chicken Kashmiri',       description: 'Half ₹220 | Full ₹380', price: '220', type: 'non-veg' },
      { name: 'Chicken Charbagh',       description: 'Half ₹210 | Full ₹360', price: '210', type: 'non-veg' },
      { name: 'Chicken Do Pyaza',       description: 'Half ₹225 | Full ₹390', price: '225', type: 'non-veg' },
      { name: 'Chicken Angara',         description: 'Half ₹245 | Full ₹395', price: '245', type: 'non-veg' },
      { name: 'Chicken Kadhai',         description: 'Half ₹210 | Full ₹370', price: '210', type: 'non-veg' },
      { name: 'Chicken Handi',          description: 'Half ₹250 | Full ₹480', price: '250', type: 'non-veg' },
      { name: 'Chicken Kolhapuri',      description: 'Half ₹240 | Full ₹395', price: '240', type: 'non-veg' },
      { name: 'Chicken Kurma',          description: 'Half ₹230 | Full ₹390', price: '230', type: 'non-veg' },
      { name: 'Chicken Murgh Musallam', description: '', price: '660', type: 'non-veg' },
    ],
  },
  // ── MUTTON ───────────────────────────────────────────────────────────────────
  {
    id: 'mutton_main_course',
    name: 'Mutton Main Course',
    items: [
      { name: 'Tawa Gurda',           description: '', price: '425',  type: 'non-veg' },
      { name: 'Mutton Tawa Chaap',    description: '', price: '790',  type: 'non-veg' },
      { name: 'Tawa Bhuna',           description: '', price: '620',  type: 'non-veg' },
      { name: 'Mutton Arabi Raan',    description: '', price: '2500', type: 'non-veg' },
      { name: 'Mutton Tandoori Raan', description: '', price: '2000', type: 'non-veg' },
      { name: 'Mutton Raan Masala',   description: '', price: '2200', type: 'non-veg' },
      { name: 'Mutton Kurma',         description: '', price: '560',  type: 'non-veg' },
      { name: 'Mutton Kolhapuri',     description: '', price: '600',  type: 'non-veg' },
      { name: 'Mutton Handi',         description: '', price: '580',  type: 'non-veg' },
      { name: 'Mutton Angara',        description: '', price: '540',  type: 'non-veg' },
      { name: 'Mutton Do Pyaza',      description: '', price: '570',  type: 'non-veg' },
      { name: 'Mutton Charbagh',      description: '', price: '599',  type: 'non-veg' },
      { name: 'Mutton Kashmiri',      description: '', price: '589',  type: 'non-veg' },
      { name: 'Mutton Mughlai',       description: '', price: '559',  type: 'non-veg' },
      { name: 'Mutton Makhanwala',    description: '', price: '599',  type: 'non-veg' },
      { name: 'Mutton Paya',          description: '', price: '580',  type: 'non-veg' },
      { name: 'Mutton Rogan Josh',    description: '', price: '720',  type: 'non-veg' },
    ],
  },
  // ── FISH & PRAWNS ─────────────────────────────────────────────────────────────
  {
    id: 'fish_prawns',
    name: 'Fish Main Course',
    items: [
      { name: 'Fish Curry',       description: '', price: '340',      type: 'non-veg' },
      { name: 'Prawns Curry',     description: '', price: '430',      type: 'non-veg', popular: true },
      { name: 'Prawns Kolhapuri', description: '', price: '460',      type: 'non-veg' },
      { name: 'Fish Tawa Fry',    description: '', price: '380',      type: 'non-veg' },
      { name: 'Fish Deep Fry',    description: '', price: '480',      type: 'non-veg' },
      { name: 'Fish Tandoori',    description: 'Per kg', price: '1200', type: 'non-veg' },
    ],
  },
  // ── PULAO (NON-VEG) ───────────────────────────────────────────────────────────
  {
    id: 'non_veg_pulao',
    name: 'Pulao',
    items: [
      { name: 'Chicken Yakhni Pulao', description: '', price: '180',  type: 'non-veg' },
      { name: 'Chicken Pulao',        description: '', price: '170',  type: 'non-veg' },
      { name: 'Chicken Zam Zam',      description: '', price: '190',  type: 'non-veg' },
      { name: 'Mutton Pulao',         description: '', price: '330',  type: 'non-veg' },
      { name: 'Mutton Yakhni',        description: '', price: '340',  type: 'non-veg' },
      { name: 'Raan Rice Mutton',     description: 'Per kg', price: '2500', type: 'non-veg' },
      { name: 'Al Faham Rice',        description: 'Half ₹370 | Full ₹720', price: '370', type: 'non-veg' },
      { name: 'Chicken Mandi',        description: 'On Order', price: '', type: 'non-veg' },
      { name: 'Mutton Mandi',         description: 'On Order', price: '', type: 'non-veg' },
      { name: 'Mutton Matki',         description: 'On Order', price: '', type: 'non-veg' },
    ],
  },
];
