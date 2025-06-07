import { CategoryCar } from "./category_car";

export const DataPriceList = [
  {
    id: "fronx",
    name: "Fronx",
    category: CategoryCar.Crossover,
    price_start: 200000000,
    image: "fronx.webp",
    image_all: [
      {
        image: "fronx.webp"
      },
      {
        image: "fronx.webp"
      }
    ],
    variants: [
      { type: "Zeta MT", price: 200000000 },
      { type: "Zeta AT", price: 210000000 },
      { type: "Alpha MT", price: 220000000 },
      { type: "Alpha AT", price: 230000000 },
    ],
  },
  {
    id: "ertiga",
    name: "All New Ertiga",
    category: CategoryCar.MPV,
    price_start: 241600000,
    image: "ertiga.webp",
    variants: [
      { type: "GA MT", price: 241600000 },
      { type: "GL MT", price: 255000000 },
      { type: "GL AT", price: 265000000 },
      { type: "GX Hybrid MT", price: 275000000 },
      { type: "GX Hybrid AT", price: 285000000 },
    ],
  },
  {
    id: "xl7",
    name: "XL7 Hybrid",
    category: CategoryCar.SUV,
    price_start: 268500000,
    image: "xl7.webp",
    variants: [
      { type: "MT", price: 268500000 },
      { type: "Zeta AT", price: 278000000 },
      { type: "Beta Hybrid MT", price: 288000000 },
      { type: "Alpha Hybrid AT", price: 308000000 },
    ],
  },
  {
    id: "grand-vitara",
    name: "Grand Vitara",
    category: CategoryCar.SUV,
    price_start: 373075000,
    image: "grand_vitara.webp",
    variants: [
      { type: "GL", price: 373075000 },
      { type: "GX", price: 395000000 },
    ],
  },
  {
    id: "s-presso",
    name: "S-Presso",
    category: CategoryCar.CityCar,
    price_start: 179550000,
    image: "spresso.webp",
    variants: [
      { type: "MT", price: 179550000 },
      { type: "AGS", price: 189000000 },
    ],
  },
  {
    id: "jimny5doors",
    name: "Jimny 5 Doors",
    category: CategoryCar.SUV,
    price_start: 491100000,
    image: "jimny.webp",
    variants: [
      { type: "MT", price: 491100000 },
      { type: "AT", price: 507000000 },
    ],
  },
  {
    id: "carry",
    name: "New Carry",
    category: CategoryCar.Pickup,
    price_start: 178500000,
    image: "carry.webp",
    variants: [
      { type: "Flat Deck", price: 178500000 },
      { type: "Wide Deck", price: 181000000 },
      { type: "AC Power Steering", price: 185000000 },
    ],
  },
  {
    id: "apv",
    name: "APV",
    category: CategoryCar.Minibus,
    price_start: 183500000,
    image: "apv.webp",
    variants: [
      { type: "Blind Van", price: 183500000 },
      { type: "Arena GA", price: 195000000 },
      { type: "Arena GL", price: 205000000 },
      { type: "SGX MT", price: 215000000 },
    ],
  },
];
