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
  {
    "id": "beverages",
    "name": "Beverages",
    "items": [
      {
        "name": "Green Tea",
        "description": "",
        "price": "20",
        "type": "veg"
      },
      {
        "name": "Special Tea",
        "description": "",
        "price": "25",
        "type": "veg"
      },
      {
        "name": "Lemon Tea",
        "description": "",
        "price": "15",
        "type": "veg"
      },
      {
        "name": "Hot Coffee",
        "description": "",
        "price": "40",
        "type": "veg"
      },
      {
        "name": "Virgin Mojito",
        "description": "",
        "price": "80",
        "type": "veg"
      },
      {
        "name": "Butter Milk",
        "description": "",
        "price": "15",
        "type": "veg"
      },
      {
        "name": "Lassi",
        "description": "",
        "price": "40",
        "type": "veg"
      },
      {
        "name": "Lemonade",
        "description": "",
        "price": "30",
        "type": "veg"
      },
      {
        "name": "Cold Coffee",
        "description": "",
        "price": "80",
        "type": "veg"
      }
    ]
  },
  {
    "id": "snacks",
    "name": "Snacks",
    "items": [
      {
        "name": "Masala Papad",
        "description": "",
        "price": "20",
        "type": "veg"
      },
      {
        "name": "Fry Masala Papad",
        "description": "",
        "price": "20",
        "type": "veg"
      },
      {
        "name": "Roasted Masala Papad",
        "description": "",
        "price": "20",
        "type": "veg"
      },
      {
        "name": "Plain Fried Papad",
        "description": "",
        "price": "15",
        "type": "veg"
      },
      {
        "name": "Plain Roasted Papad",
        "description": "",
        "price": "15",
        "type": "veg"
      },
      {
        "name": "Veg Sandwich",
        "description": "",
        "price": "70",
        "type": "veg"
      },
      {
        "name": "Veg Club Sandwich",
        "description": "",
        "price": "120",
        "type": "veg"
      },
      {
        "name": "Veg Grilled Sandwich",
        "description": "",
        "price": "80",
        "type": "veg"
      },
      {
        "name": "Veg Cheese Grilled Sandwich",
        "description": "",
        "price": "",
        "type": "veg"
      },
      {
        "name": "Chana Lehsun Fry",
        "description": "",
        "price": "220",
        "type": "veg"
      },
      {
        "name": "Oats",
        "description": "",
        "price": "180",
        "type": "veg"
      },
      {
        "name": "Masala Oats",
        "description": "",
        "price": "200",
        "type": "veg"
      },
      {
        "name": "Peanut Chat",
        "description": "",
        "price": "280",
        "type": "veg"
      },
      {
        "name": "Peanut Fry",
        "description": "",
        "price": "220",
        "type": "veg"
      },
      {
        "name": "Chicken Sandwich",
        "description": "",
        "price": "100",
        "type": "non-veg"
      },
      {
        "name": "Chicken Club Sandwich",
        "description": "",
        "price": "120",
        "type": "non-veg"
      },
      {
        "name": "Chicken Grilled Sandwich",
        "description": "",
        "price": "140",
        "type": "non-veg"
      },
      {
        "name": "Chicken Cheese Grilled Sandwich",
        "description": "",
        "price": "130",
        "type": "non-veg"
      }
    ]
  },
  {
    "id": "salad",
    "name": "Salads",
    "items": [
      {
        "name": "Green Salad",
        "description": "",
        "price": "50",
        "type": "veg"
      },
      {
        "name": "Tomato Salad",
        "description": "",
        "price": "40",
        "type": "veg"
      },
      {
        "name": "Raitha Salad",
        "description": "",
        "price": "50",
        "type": "veg"
      },
      {
        "name": "Onion Salad",
        "description": "",
        "price": "30",
        "type": "veg"
      },
      {
        "name": "Fruit Salad",
        "description": "",
        "price": "120",
        "type": "veg"
      }
    ]
  },
  {
    "id": "soups",
    "name": "Soups",
    "items": [
      {
        "name": "Cream of Tomato",
        "description": "",
        "price": "100",
        "type": "veg"
      },
      {
        "name": "Veg Clear Soup",
        "description": "",
        "price": "90",
        "type": "veg"
      },
      {
        "name": "Veg Manchow Soup",
        "description": "",
        "price": "90",
        "type": "veg"
      },
      {
        "name": "Sweet Corn Soup",
        "description": "",
        "price": "105",
        "type": "veg"
      },
      {
        "name": "Chicken Clear Soup",
        "description": "",
        "price": "120",
        "type": "non-veg"
      },
      {
        "name": "Chicken Manchow Soup",
        "description": "",
        "price": "120",
        "type": "non-veg"
      }
    ]
  },
  {
    "id": "fritters",
    "name": "Fritters",
    "items": [
      {
        "name": "Onion Pakora",
        "description": "",
        "price": "80",
        "type": "veg"
      },
      {
        "name": "Paneer Pakora",
        "description": "",
        "price": "180",
        "type": "veg"
      },
      {
        "name": "French Fries",
        "description": "",
        "price": "120",
        "type": "veg"
      },
      {
        "name": "Aloo Tikkies",
        "description": "",
        "price": "100",
        "type": "veg"
      },
      {
        "name": "Crispy Corn",
        "description": "",
        "price": "180",
        "type": "veg"
      },
      {
        "name": "Ring Onion",
        "description": "",
        "price": "80",
        "type": "veg"
      },
      {
        "name": "Mirchi Pakora",
        "description": "",
        "price": "60",
        "type": "veg"
      },
      {
        "name": "Chicken Pakora",
        "description": "",
        "price": "240",
        "type": "non-veg"
      },
      {
        "name": "Fish Pakora",
        "description": "",
        "price": "280",
        "type": "non-veg"
      }
    ]
  },
  {
    "id": "veg_starter_tikka",
    "name": "Veg Starter — Tikka",
    "items": [
      {
        "name": "Paneer Tikka",
        "description": "",
        "price": "260",
        "type": "veg"
      },
      {
        "name": "Paneer Pahadi Tikka",
        "description": "",
        "price": "230",
        "type": "veg"
      },
      {
        "name": "Paneer Schezwan Tikka",
        "description": "",
        "price": "220",
        "type": "veg"
      },
      {
        "name": "Paneer Reshmi Tikka",
        "description": "",
        "price": "220",
        "type": "veg"
      },
      {
        "name": "Paneer Malai Tikka",
        "description": "",
        "price": "280",
        "type": "veg"
      },
      {
        "name": "Mushroom Tikka",
        "description": "",
        "price": "240",
        "type": "veg"
      }
    ]
  },
  {
    "id": "veg_starter_fried",
    "name": "Veg Starter — Fried",
    "items": [
      {
        "name": "Hara Bhara Kabab (Pea, Spinach...)",
        "description": "",
        "price": "200",
        "type": "veg"
      },
      {
        "name": "Veg Mayoneese Kabab",
        "description": "",
        "price": "210",
        "type": "veg"
      },
      {
        "name": "Veg Pahadi Kabab",
        "description": "",
        "price": "170",
        "type": "veg"
      },
      {
        "name": "Veg Spring Roll (Paneer Stuffing)",
        "description": "",
        "price": "180",
        "type": "veg"
      },
      {
        "name": "Veg Spring Roll (Noodles Stuffing)",
        "description": "",
        "price": "150",
        "type": "veg"
      },
      {
        "name": "Paneer Finger",
        "description": "",
        "price": "230",
        "type": "veg"
      },
      {
        "name": "Veg Cutlets",
        "description": "",
        "price": "170",
        "type": "veg"
      },
      {
        "name": "Hara Bhara Kabab - Paneer",
        "description": "",
        "price": "260",
        "type": "veg"
      },
      {
        "name": "Paneer Kandi",
        "description": "",
        "price": "280",
        "type": "veg"
      },
      {
        "name": "Paneer Sizzler",
        "description": "",
        "price": "470",
        "type": "veg"
      },
      {
        "name": "Veg Malai Kulfi",
        "description": "",
        "price": "210",
        "type": "veg"
      },
      {
        "name": "Veg Lolipop",
        "description": "",
        "price": "220",
        "type": "veg"
      }
    ]
  },
  {
    "id": "veg_starter_chinese",
    "name": "Veg Starter — Chinese",
    "items": [
      {
        "name": "Honey Chilli Potato",
        "description": "",
        "price": "180",
        "type": "veg"
      },
      {
        "name": "Chilli Potato",
        "description": "",
        "price": "160",
        "type": "veg"
      },
      {
        "name": "Paneer 65 - Dry",
        "description": "",
        "price": "220",
        "type": "veg"
      },
      {
        "name": "Paneer Schezwan - Dry",
        "description": "",
        "price": "240",
        "type": "veg"
      },
      {
        "name": "Paneer Crispy",
        "description": "",
        "price": "210",
        "type": "veg"
      },
      {
        "name": "Chilli Paneer",
        "description": "",
        "price": "230",
        "type": "veg"
      },
      {
        "name": "Paneer Manchurian",
        "description": "",
        "price": "240",
        "type": "veg"
      },
      {
        "name": "Gobhi Manchurian",
        "description": "",
        "price": "220",
        "type": "veg"
      },
      {
        "name": "Gobhi Chilli",
        "description": "",
        "price": "240",
        "type": "veg"
      },
      {
        "name": "Mushroom Chilli",
        "description": "",
        "price": "240",
        "type": "veg"
      },
      {
        "name": "Dragon Paneer",
        "description": "",
        "price": "300",
        "type": "veg"
      },
      {
        "name": "Mix Veg Sizzler",
        "description": "",
        "price": "320",
        "type": "veg"
      },
      {
        "name": "Veg Manchurian - Dry",
        "description": "",
        "price": "140",
        "type": "veg"
      },
      {
        "name": "Veg Manchurian - Semi Gravy",
        "description": "",
        "price": "160",
        "type": "veg"
      }
    ]
  },
  {
    "id": "parathas",
    "name": "Parathas",
    "items": [
      {
        "name": "Aloo Paratha",
        "description": "",
        "price": "50",
        "type": "veg"
      },
      {
        "name": "Paneer Paratha",
        "description": "",
        "price": "70",
        "type": "veg"
      },
      {
        "name": "Lachha Paratha",
        "description": "",
        "price": "40",
        "type": "veg"
      },
      {
        "name": "Onion Paratha",
        "description": "",
        "price": "40",
        "type": "veg"
      }
    ]
  },
  {
    "id": "veg_main_course",
    "name": "Veg Main Course — Indian",
    "items": [
      {
        "name": "Soya Chaap",
        "description": "",
        "price": "260",
        "type": "veg"
      },
      {
        "name": "Mashroom Masala",
        "description": "",
        "price": "230",
        "type": "veg"
      },
      {
        "name": "Bhindi Masala",
        "description": "",
        "price": "220",
        "type": "veg"
      },
      {
        "name": "Mashroom Do Pyaza",
        "description": "",
        "price": "220",
        "type": "veg"
      },
      {
        "name": "Shahi Bhindi",
        "description": "",
        "price": "280",
        "type": "veg"
      },
      {
        "name": "Veg Kolhapuri",
        "description": "",
        "price": "240",
        "type": "veg"
      },
      {
        "name": "Matar Mashroom",
        "description": "",
        "price": "240",
        "type": "veg"
      },
      {
        "name": "Veg Singapuri",
        "description": "",
        "price": "180",
        "type": "veg"
      },
      {
        "name": "Aloo Jeera",
        "description": "",
        "price": "170",
        "type": "veg"
      },
      {
        "name": "Bhindi Do Pyaza",
        "description": "",
        "price": "260",
        "type": "veg"
      },
      {
        "name": "Shahi Kaju",
        "description": "",
        "price": "210",
        "type": "veg"
      },
      {
        "name": "Kaju Paneer",
        "description": "",
        "price": "220",
        "type": "veg"
      },
      {
        "name": "Mix Veg",
        "description": "",
        "price": "170",
        "type": "veg"
      },
      {
        "name": "Chana Masala",
        "description": "",
        "price": "240",
        "type": "veg"
      },
      {
        "name": "Kaju Curry",
        "description": "",
        "price": "270",
        "type": "veg"
      },
      {
        "name": "Sev Tamatar",
        "description": "",
        "price": "170",
        "type": "veg"
      },
      {
        "name": "Sev Doodh",
        "description": "",
        "price": "280",
        "type": "veg"
      },
      {
        "name": "Dal Fry",
        "description": "",
        "price": "140",
        "type": "veg"
      },
      {
        "name": "Dal Tadka",
        "description": "",
        "price": "160",
        "type": "veg"
      },
      {
        "name": "Dal Makhni",
        "description": "",
        "price": "270",
        "type": "veg"
      },
      {
        "name": "Dal Khichdi",
        "description": "",
        "price": "140",
        "type": "veg"
      },
      {
        "name": "Veg Thali",
        "description": "",
        "price": "160",
        "type": "veg"
      },
      {
        "name": "Paneer Lajawab",
        "description": "",
        "price": "280",
        "type": "veg"
      },
      {
        "name": "Paneer Lababdaar",
        "description": "",
        "price": "300",
        "type": "veg"
      },
      {
        "name": "Paneer Indori",
        "description": "",
        "price": "280",
        "type": "veg"
      },
      {
        "name": "Paneer Punjabi",
        "description": "",
        "price": "280",
        "type": "veg"
      },
      {
        "name": "Paneer Angara",
        "description": "",
        "price": "230",
        "type": "veg"
      },
      {
        "name": "Paneer Toofani",
        "description": "",
        "price": "280",
        "type": "veg"
      },
      {
        "name": "Paneer Mirch",
        "description": "",
        "price": "280",
        "type": "veg"
      },
      {
        "name": "Paneer Chatpata",
        "description": "",
        "price": "260",
        "type": "veg"
      },
      {
        "name": "Paneer Haryali",
        "description": "",
        "price": "280",
        "type": "veg"
      },
      {
        "name": "Kadhai Paneer",
        "description": "",
        "price": "260",
        "type": "veg"
      },
      {
        "name": "Paneer Kashmiri",
        "description": "",
        "price": "280",
        "type": "veg"
      },
      {
        "name": "Makhan Paneer",
        "description": "",
        "price": "260",
        "type": "veg"
      },
      {
        "name": "Paneer Tikka Masala",
        "description": "",
        "price": "270",
        "type": "veg"
      },
      {
        "name": "Paneer Masala Kofta",
        "description": "",
        "price": "260",
        "type": "veg"
      },
      {
        "name": "Paneer Malai Kofta",
        "description": "",
        "price": "290",
        "type": "veg"
      },
      {
        "name": "Palak Paneer",
        "description": "",
        "price": "300",
        "type": "veg"
      },
      {
        "name": "Matar Paneer",
        "description": "",
        "price": "390",
        "type": "veg"
      },
      {
        "name": "Paneer Sizzler",
        "description": "",
        "price": "300",
        "type": "veg"
      }
    ]
  },
  {
    "id": "veg_chinese_noodles",
    "name": "Veg Main Course — Chinese & Noodles",
    "items": [
      {
        "name": "Veg Fried Rice",
        "description": "",
        "price": "120",
        "type": "veg"
      },
      {
        "name": "Veg Schezwan Fried Rice",
        "description": "",
        "price": "130",
        "type": "veg"
      },
      {
        "name": "Veg Triple Fried Rice",
        "description": "",
        "price": "180",
        "type": "veg"
      },
      {
        "name": "Veg Manchurian Fried Rice",
        "description": "",
        "price": "180",
        "type": "veg"
      },
      {
        "name": "Veg Hong Kong Fried Rice",
        "description": "",
        "price": "160",
        "type": "veg"
      },
      {
        "name": "Veg Singapore Rice",
        "description": "",
        "price": "470",
        "type": "veg"
      },
      {
        "name": "Paneer Fried Rice",
        "description": "",
        "price": "180",
        "type": "veg"
      },
      {
        "name": "Veg Noodles Bhel",
        "description": "",
        "price": "90",
        "type": "veg"
      },
      {
        "name": "Veg Noodles",
        "description": "",
        "price": "120",
        "type": "veg"
      },
      {
        "name": "Veg Schezwan Noodles",
        "description": "",
        "price": "125",
        "type": "veg"
      },
      {
        "name": "Veg Triple Noodles",
        "description": "",
        "price": "200",
        "type": "veg"
      },
      {
        "name": "Veg Manchurian Noodles",
        "description": "",
        "price": "150",
        "type": "veg"
      }
    ]
  },
  {
    "id": "biryani_pulao_veg",
    "name": "Biryani & Pulao — Veg",
    "items": [
      {
        "name": "Veg Biryani",
        "description": "",
        "price": "160",
        "type": "veg"
      },
      {
        "name": "Mashroom Biryani",
        "description": "",
        "price": "190",
        "type": "veg"
      },
      {
        "name": "Paneer Dum Biryani",
        "description": "",
        "price": "210",
        "type": "veg"
      },
      {
        "name": "Paneer Hyderabadi Biryani",
        "description": "",
        "price": "220",
        "type": "veg"
      },
      {
        "name": "Veg Pulao",
        "description": "",
        "price": "180",
        "type": "veg"
      },
      {
        "name": "Paneer Khafsa",
        "description": "",
        "price": "600",
        "type": "veg"
      },
      {
        "name": "Manchurian Biryani",
        "description": "",
        "price": "230",
        "type": "veg"
      }
    ]
  },
  {
    "id": "breads",
    "name": "Breads",
    "items": [
      {
        "name": "Chapati",
        "description": "",
        "price": "12",
        "type": "veg"
      },
      {
        "name": "Chapati Butter",
        "description": "",
        "price": "15",
        "type": "veg"
      },
      {
        "name": "Tandoori Roti",
        "description": "",
        "price": "15",
        "type": "veg"
      },
      {
        "name": "Tandoori Butter Roti",
        "description": "",
        "price": "20",
        "type": "veg"
      },
      {
        "name": "Butter Naan",
        "description": "",
        "price": "25",
        "type": "veg"
      },
      {
        "name": "Garlic Naan",
        "description": "",
        "price": "30",
        "type": "veg"
      },
      {
        "name": "Garlic Naan Butter",
        "description": "",
        "price": "35",
        "type": "veg"
      },
      {
        "name": "Mughlai Naan",
        "description": "",
        "price": "40",
        "type": "veg"
      }
    ]
  },
  {
    "id": "rice",
    "name": "Rice",
    "items": [
      {
        "name": "Jeera Rice",
        "description": "",
        "price": "120",
        "type": "veg"
      },
      {
        "name": "Plain Rice",
        "description": "",
        "price": "100",
        "type": "veg"
      },
      {
        "name": "Steam Rice",
        "description": "",
        "price": "100",
        "type": "veg"
      },
      {
        "name": "Curd Rice",
        "description": "",
        "price": "140",
        "type": "veg"
      }
    ]
  },
  {
    "id": "chicken_starter_tandoori",
    "name": "Chicken Starter — Tandoori",
    "items": [
      {
        "name": "Chicken Burrah",
        "description": "Full Rs.450",
        "price": "450",
        "type": "non-veg"
      },
      {
        "name": "Lemon Chicken",
        "description": "Full Rs.430",
        "price": "430",
        "type": "non-veg"
      },
      {
        "name": "Chicken Malai Tandoori",
        "description": "Full Rs.460",
        "price": "460",
        "type": "non-veg"
      },
      {
        "name": "Chicken Pahadi Tikka",
        "description": "Full Rs.200",
        "price": "200",
        "type": "non-veg"
      },
      {
        "name": "Chicken Tikka",
        "description": "Full Rs.220",
        "price": "220",
        "type": "non-veg"
      },
      {
        "name": "Chicken Tiranga Tikka",
        "description": "Full Rs.220",
        "price": "220",
        "type": "non-veg"
      },
      {
        "name": "Chicken Tandoori",
        "description": "Full Rs.—",
        "price": "",
        "type": "non-veg"
      },
      {
        "name": "Tandoori Leg Pcs",
        "description": "Half (3 pcs) Rs.200 | Full (5 pcs) Rs.370",
        "price": "200",
        "type": "non-veg"
      },
      {
        "name": "Tandoori Thighs",
        "description": "Full Rs.—",
        "price": "",
        "type": "non-veg"
      }
    ]
  },
  {
    "id": "chicken_starter_fried",
    "name": "Chicken Starter — Fried",
    "items": [
      {
        "name": "Chicken Breast",
        "description": "Full Rs.290 | Full Rs.300",
        "price": "290",
        "type": "non-veg"
      },
      {
        "name": "Chicken Shami Kabab",
        "description": "Full Rs.240",
        "price": "240",
        "type": "non-veg"
      },
      {
        "name": "Chicken Chapli Kabab",
        "description": "Full Rs.220",
        "price": "220",
        "type": "non-veg"
      },
      {
        "name": "Chicken Cheese Kebab",
        "description": "Half Rs.250 | Full Rs.470",
        "price": "250",
        "type": "non-veg"
      },
      {
        "name": "Chicken Shahi Roll",
        "description": "Half Rs.140 | Full Rs.280",
        "price": "140",
        "type": "non-veg"
      },
      {
        "name": "Chicken Palak Kebab",
        "description": "Full Rs.380",
        "price": "380",
        "type": "non-veg"
      },
      {
        "name": "Chicken Cutlets",
        "description": "Full Rs.380",
        "price": "380",
        "type": "non-veg"
      },
      {
        "name": "Chicken Drum Stick",
        "description": "Full Rs.340",
        "price": "340",
        "type": "non-veg"
      },
      {
        "name": "Tandoori Schezwan Leg Piece",
        "description": "Half Rs.220 | Full Rs.400",
        "price": "220",
        "type": "non-veg"
      },
      {
        "name": "Chicken Malai Kulfi",
        "description": "Full Rs.360",
        "price": "360",
        "type": "non-veg"
      },
      {
        "name": "Chicken Seekh Kebab (6 Pc)",
        "description": "Full Rs.200",
        "price": "200",
        "type": "non-veg"
      },
      {
        "name": "Chicken Tikka Dry (6 Pc)",
        "description": "Full Rs.200",
        "price": "200",
        "type": "non-veg"
      },
      {
        "name": "Chicken Makhmali Kebab (6 Pc)",
        "description": "Full Rs.230",
        "price": "230",
        "type": "non-veg"
      },
      {
        "name": "Chicken Reshmi Kebab (6 Pc)",
        "description": "Full Rs.220",
        "price": "220",
        "type": "non-veg"
      },
      {
        "name": "Chicken Achari (6 Pc)",
        "description": "Full Rs.200",
        "price": "200",
        "type": "non-veg"
      },
      {
        "name": "Chicken Gulab Khass",
        "description": "Full Rs.440",
        "price": "440",
        "type": "non-veg"
      },
      {
        "name": "Chicken Kandi Tiranga",
        "description": "Full Rs.280",
        "price": "280",
        "type": "non-veg"
      },
      {
        "name": "Chicken Crispy Fried",
        "description": "Full Rs.240",
        "price": "240",
        "type": "non-veg"
      },
      {
        "name": "Chicken Fry",
        "description": "Full Rs.400",
        "price": "400",
        "type": "non-veg"
      },
      {
        "name": "Chicken Garlic Mayoneese",
        "description": "Full Rs.250",
        "price": "250",
        "type": "non-veg"
      },
      {
        "name": "Chicken Tiranga Roll",
        "description": "Full Rs.350",
        "price": "350",
        "type": "non-veg"
      },
      {
        "name": "Chicken Badami",
        "description": "Full Rs.300",
        "price": "300",
        "type": "non-veg"
      },
      {
        "name": "Chicken Popcorn",
        "description": "Full Rs.220",
        "price": "220",
        "type": "non-veg"
      },
      {
        "name": "Chicken Nargasi Kebab",
        "description": "Full Rs.380",
        "price": "380",
        "type": "non-veg"
      },
      {
        "name": "Chicken Mexican Sizzler",
        "description": "Full Rs.470",
        "price": "470",
        "type": "non-veg"
      }
    ]
  },
  {
    "id": "chicken_starter_chinese",
    "name": "Chicken Starter — Chinese",
    "items": [
      {
        "name": "Chicken Schezwan (Dry)",
        "description": "Full Rs.220",
        "price": "220",
        "type": "non-veg"
      },
      {
        "name": "Chicken Lollipop (Dry)",
        "description": "Full Rs.240",
        "price": "240",
        "type": "non-veg"
      },
      {
        "name": "Chicken Lollipop (Semi Gravy)",
        "description": "Full Rs.260",
        "price": "260",
        "type": "non-veg"
      },
      {
        "name": "Chicken Crispy (Dry) Chinese Sauce",
        "description": "Full Rs.240",
        "price": "240",
        "type": "non-veg"
      },
      {
        "name": "Dragon Chicken (Dry)",
        "description": "Full Rs.300",
        "price": "300",
        "type": "non-veg"
      },
      {
        "name": "Chicken Manchurian (Dry)",
        "description": "Full Rs.260",
        "price": "260",
        "type": "non-veg"
      },
      {
        "name": "Chilli Chicken (Dry)",
        "description": "Full Rs.210",
        "price": "210",
        "type": "non-veg"
      },
      {
        "name": "Chicken 65 (Dry)",
        "description": "Full Rs.215",
        "price": "215",
        "type": "non-veg"
      }
    ]
  },
  {
    "id": "chicken_noodles",
    "name": "Chicken Noodles — Chinese",
    "items": [
      {
        "name": "Chicken Noodles",
        "description": "Full Rs.150",
        "price": "150",
        "type": "non-veg"
      },
      {
        "name": "Chicken Schezwan Noodles",
        "description": "Full Rs.160",
        "price": "160",
        "type": "non-veg"
      },
      {
        "name": "Chicken Triple Noodles",
        "description": "Full Rs.200",
        "price": "200",
        "type": "non-veg"
      },
      {
        "name": "Chicken Manchurian Noodles",
        "description": "Full Rs.160",
        "price": "160",
        "type": "non-veg"
      },
      {
        "name": "Egg Noodles",
        "description": "Full Rs.130",
        "price": "130",
        "type": "non-veg"
      },
      {
        "name": "Egg Schezwan Noodles",
        "description": "Full Rs.140",
        "price": "140",
        "type": "non-veg"
      }
    ]
  },
  {
    "id": "chicken_fried_rice",
    "name": "Chicken Fried Rice — Chinese",
    "items": [
      {
        "name": "Chicken Fried Rice",
        "description": "Full Rs.150",
        "price": "150",
        "type": "non-veg"
      },
      {
        "name": "Chicken Schezwan Fried Rice",
        "description": "Full Rs.160",
        "price": "160",
        "type": "non-veg"
      },
      {
        "name": "Chicken Triple Fried Rice",
        "description": "Full Rs.190",
        "price": "190",
        "type": "non-veg"
      },
      {
        "name": "Chicken Manchurian Fried Rice",
        "description": "Full Rs.200",
        "price": "200",
        "type": "non-veg"
      },
      {
        "name": "Egg Fried Rice",
        "description": "Full Rs.120",
        "price": "120",
        "type": "non-veg"
      },
      {
        "name": "Egg Schezwan Fried Rice",
        "description": "Full Rs.125",
        "price": "125",
        "type": "non-veg"
      },
      {
        "name": "Chicken Hong-Kong Rice",
        "description": "Full Rs.200",
        "price": "200",
        "type": "non-veg"
      },
      {
        "name": "Chicken Singapore Rice",
        "description": "Full Rs.180",
        "price": "180",
        "type": "non-veg"
      }
    ]
  },
  {
    "id": "biryani_non_veg",
    "name": "Biryani — Non-Veg",
    "items": [
      {
        "name": "Chicken Dum Biryani",
        "description": "",
        "price": "210",
        "type": "non-veg"
      },
      {
        "name": "Chicken Tikka Biryani",
        "description": "",
        "price": "240",
        "type": "non-veg"
      },
      {
        "name": "Chicken Hyderabadi Biryani",
        "description": "",
        "price": "220",
        "type": "non-veg"
      },
      {
        "name": "Chicken Seekh Malai Biryani",
        "description": "",
        "price": "260",
        "type": "non-veg"
      },
      {
        "name": "Chicken Malai Biryani",
        "description": "",
        "price": "250",
        "type": "non-veg"
      },
      {
        "name": "Chicken Lucknowee Biryani",
        "description": "",
        "price": "280",
        "type": "non-veg"
      },
      {
        "name": "Chicken Tandoori Biryani",
        "description": "",
        "price": "250",
        "type": "non-veg"
      },
      {
        "name": "Mutton Dum Biryani",
        "description": "",
        "price": "360",
        "type": "non-veg"
      },
      {
        "name": "Mutton Malai Biryani",
        "description": "",
        "price": "400",
        "type": "non-veg"
      },
      {
        "name": "Egg Biryani",
        "description": "",
        "price": "210",
        "type": "non-veg"
      }
    ]
  },
  {
    "id": "chicken_main_course_boneless",
    "name": "Chicken Main Course — Boneless",
    "items": [
      {
        "name": "Chicken Banjara",
        "description": "Full Rs.400",
        "price": "400",
        "type": "non-veg"
      },
      {
        "name": "Chicken Kali Mirch",
        "description": "Full Rs.340",
        "price": "340",
        "type": "non-veg"
      },
      {
        "name": "Chicken Bhuna",
        "description": "Full Rs.300",
        "price": "300",
        "type": "non-veg"
      },
      {
        "name": "Chicken Keema",
        "description": "Full Rs.280",
        "price": "280",
        "type": "non-veg"
      },
      {
        "name": "Chicken Lucknowee",
        "description": "Full Rs.560",
        "price": "560",
        "type": "non-veg"
      },
      {
        "name": "Chicken Afghani",
        "description": "Full Rs.300",
        "price": "300",
        "type": "non-veg"
      },
      {
        "name": "Chicken Tabba Gosht",
        "description": "Full Rs.290",
        "price": "290",
        "type": "non-veg"
      },
      {
        "name": "Chicken Haryali",
        "description": "Full Rs.280",
        "price": "280",
        "type": "non-veg"
      },
      {
        "name": "Tawa Chicken",
        "description": "Full Rs.260",
        "price": "260",
        "type": "non-veg"
      },
      {
        "name": "Butter Chicken",
        "description": "Full Rs.265",
        "price": "265",
        "type": "non-veg"
      },
      {
        "name": "Chicken Chatpata",
        "description": "Full Rs.300",
        "price": "300",
        "type": "non-veg"
      },
      {
        "name": "Chicken Patiyala",
        "description": "Full Rs.360",
        "price": "360",
        "type": "non-veg"
      },
      {
        "name": "Chicken Mirch",
        "description": "Full Rs.275",
        "price": "275",
        "type": "non-veg"
      },
      {
        "name": "Chicken Toofani",
        "description": "Full Rs.280",
        "price": "280",
        "type": "non-veg"
      },
      {
        "name": "Chicken Angara",
        "description": "Full Rs.300",
        "price": "300",
        "type": "non-veg"
      },
      {
        "name": "Chicken Lazeez",
        "description": "Full Rs.285",
        "price": "285",
        "type": "non-veg"
      },
      {
        "name": "Chicken Punjabi",
        "description": "Full Rs.300",
        "price": "300",
        "type": "non-veg"
      },
      {
        "name": "Chicken Lajawab",
        "description": "Full Rs.295",
        "price": "295",
        "type": "non-veg"
      },
      {
        "name": "Special Bombay Chicken Curry",
        "description": "Full Rs.300",
        "price": "300",
        "type": "non-veg"
      }
    ]
  },
  {
    "id": "chicken_main_course_bone",
    "name": "Chicken Main Course — Bone",
    "items": [
      {
        "name": "Chicken Changezi",
        "description": "Half Rs.320 | Full Rs.550",
        "price": "320",
        "type": "non-veg"
      },
      {
        "name": "Chicken Makhni",
        "description": "Half Rs.330 | Full Rs.570",
        "price": "330",
        "type": "non-veg"
      },
      {
        "name": "Chicken Peshawari",
        "description": "Half Rs.310 | Full Rs.540",
        "price": "310",
        "type": "non-veg"
      },
      {
        "name": "Tawa Chicken",
        "description": "Half Rs.300 | Full Rs.520",
        "price": "300",
        "type": "non-veg"
      },
      {
        "name": "Chicken Mughlai",
        "description": "Half Rs.380 | Full Rs.460",
        "price": "380",
        "type": "non-veg"
      },
      {
        "name": "Chicken Tikka Masala",
        "description": "Half Rs.240 | Full Rs.400",
        "price": "240",
        "type": "non-veg"
      },
      {
        "name": "Palak Chicken",
        "description": "Half Rs.210 | Full Rs.370",
        "price": "210",
        "type": "non-veg"
      },
      {
        "name": "Chicken Makhanwala",
        "description": "Half Rs.260 | Full Rs.400",
        "price": "260",
        "type": "non-veg"
      },
      {
        "name": "Chicken Kashmiri",
        "description": "Half Rs.220 | Full Rs.380",
        "price": "220",
        "type": "non-veg"
      },
      {
        "name": "Chicken Charbagh",
        "description": "Half Rs.210 | Full Rs.360",
        "price": "210",
        "type": "non-veg"
      },
      {
        "name": "Chicken Do Pyaza",
        "description": "Half Rs.225 | Full Rs.390",
        "price": "225",
        "type": "non-veg"
      },
      {
        "name": "Chicken Angara",
        "description": "Half Rs.245 | Full Rs.395",
        "price": "245",
        "type": "non-veg"
      },
      {
        "name": "Chicken Kadhai",
        "description": "Half Rs.210 | Full Rs.370",
        "price": "210",
        "type": "non-veg"
      },
      {
        "name": "Chicken Handi",
        "description": "Half Rs.250 | Full Rs.480",
        "price": "250",
        "type": "non-veg"
      },
      {
        "name": "Chicken Kolhapuri",
        "description": "Half Rs.240 | Full Rs.395",
        "price": "240",
        "type": "non-veg"
      },
      {
        "name": "Chicken Kurma",
        "description": "Half Rs.230 | Full Rs.390",
        "price": "230",
        "type": "non-veg"
      },
      {
        "name": "Chicken Murgh Musallam",
        "description": "Full Rs.660",
        "price": "660",
        "type": "non-veg"
      }
    ]
  },
  {
    "id": "mutton_main_course",
    "name": "Mutton Main Course",
    "items": [
      {
        "name": "Tawa Gurda",
        "description": "Full Rs.425",
        "price": "425",
        "type": "non-veg"
      },
      {
        "name": "Mutton Tawa Chaap",
        "description": "Full Rs.790",
        "price": "790",
        "type": "non-veg"
      },
      {
        "name": "Tawa Bhuna",
        "description": "Full Rs.620",
        "price": "620",
        "type": "non-veg"
      },
      {
        "name": "Mutton Arabi Raan",
        "description": "Full Rs.2500",
        "price": "2500",
        "type": "non-veg"
      },
      {
        "name": "Mutton Tandoori Raan",
        "description": "Full Rs.2000",
        "price": "2000",
        "type": "non-veg"
      },
      {
        "name": "Mutton Raan Masala",
        "description": "Full Rs.2200",
        "price": "2200",
        "type": "non-veg"
      },
      {
        "name": "Mutton Kurma",
        "description": "Full Rs.560",
        "price": "560",
        "type": "non-veg"
      },
      {
        "name": "Mutton Kolhapuri",
        "description": "Full Rs.600",
        "price": "600",
        "type": "non-veg"
      },
      {
        "name": "Mutton Handi",
        "description": "Full Rs.580",
        "price": "580",
        "type": "non-veg"
      },
      {
        "name": "Mutton Angara",
        "description": "Full Rs.540",
        "price": "540",
        "type": "non-veg"
      },
      {
        "name": "Mutton Do Pyaza",
        "description": "Full Rs.570",
        "price": "570",
        "type": "non-veg"
      },
      {
        "name": "Mutton Charbagh",
        "description": "Full Rs.599",
        "price": "599",
        "type": "non-veg"
      },
      {
        "name": "Mutton Kashmiri",
        "description": "Full Rs.589",
        "price": "589",
        "type": "non-veg"
      },
      {
        "name": "Mutton Mughlai",
        "description": "Full Rs.559",
        "price": "559",
        "type": "non-veg"
      },
      {
        "name": "Mutton Makkhan Wala",
        "description": "Full Rs.599",
        "price": "599",
        "type": "non-veg"
      },
      {
        "name": "Mutton Paya",
        "description": "Full Rs.580",
        "price": "580",
        "type": "non-veg"
      },
      {
        "name": "Mutton Rogan Josh",
        "description": "Half Rs.720",
        "price": "720",
        "type": "non-veg"
      }
    ]
  },
  {
    "id": "fish_main_course",
    "name": "Fish Main Course",
    "items": [
      {
        "name": "Fish Curry",
        "description": "Full Rs.340",
        "price": "340",
        "type": "non-veg"
      },
      {
        "name": "Prawns Curry",
        "description": "Full Rs.430",
        "price": "430",
        "type": "non-veg"
      },
      {
        "name": "Prawns Kolhapuri",
        "description": "Full Rs.460",
        "price": "460",
        "type": "non-veg"
      },
      {
        "name": "Fish Tawa Fry",
        "description": "Full (4 pcs) Rs.380",
        "price": "380",
        "type": "non-veg"
      },
      {
        "name": "Fish Deep Fry",
        "description": "Full (4 pcs) Rs.480",
        "price": "480",
        "type": "non-veg"
      },
      {
        "name": "Fish Tandoori",
        "description": "Per KG Rs.1200",
        "price": "1200",
        "type": "non-veg"
      }
    ]
  },
  {
    "id": "pulao_non_veg",
    "name": "Pulao — Non-Veg",
    "items": [
      {
        "name": "Chicken Yakhni Pulao",
        "description": "Full (4 pcs) Rs.180",
        "price": "180",
        "type": "non-veg"
      },
      {
        "name": "Chicken Pulao",
        "description": "Full Rs.170",
        "price": "170",
        "type": "non-veg"
      },
      {
        "name": "Chicken Zam Zam",
        "description": "Full Rs.190",
        "price": "190",
        "type": "non-veg"
      },
      {
        "name": "Mutton Pulao",
        "description": "Full (4 pcs) Rs.330",
        "price": "330",
        "type": "non-veg"
      },
      {
        "name": "Mutton Yakhni",
        "description": "Full (4 pcs) Rs.340",
        "price": "340",
        "type": "non-veg"
      },
      {
        "name": "Raan Rice Mutton",
        "description": "Per KG Rs.2500",
        "price": "2500",
        "type": "non-veg"
      },
      {
        "name": "Al Faham Rice",
        "description": "Half Rs.370 | Full Rs.720",
        "price": "370",
        "type": "non-veg"
      },
      {
        "name": "Chicken Mandi",
        "description": "",
        "price": "On Order",
        "type": "non-veg"
      },
      {
        "name": "Mutton Mandi",
        "description": "",
        "price": "On Order",
        "type": "non-veg"
      },
      {
        "name": "Mutton Matki",
        "description": "",
        "price": "On Order",
        "type": "non-veg"
      }
    ]
  }
];
