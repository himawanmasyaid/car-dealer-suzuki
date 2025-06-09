import { CategoryCar } from "./category_car";

export interface CarImage {
  image: string;
  alt?: string;
}

export interface CarVariant {
  type: string;
  price: number;
}

export interface CarModel {
  id: string;
  name: string;
  category: CategoryCar;
  price_start: number;
  image: string;
  image_all?: CarImage[];
  variants: CarVariant[];
}

export const DataPriceList = [
  {
    id: "fronx",
    name: "Fronx",
    category: CategoryCar.Crossover,
    price_start: 263800000,
    image: "fronx.webp",
    image_all: [
      {
        image: "fronx.webp",
      },
      {
        image: "fronx.webp",
      },
    ],
    variants: [
      { type: "FRONX GL MT", price: 263800000 },
      { type: "FRONX GL AT", price: 275800000 },
      { type: "FRONX GX MT", price: 280800000 },
      { type: "FRONX GX AT", price: 298800000 },
      { type: "FRONX SGX", price: 324800000 },
      { type: "FRONX SGX TWO TONE", price: 326800000 },
    ],
  },
  {
    id: "ertiga",
    name: "All New Ertiga",
    category: CategoryCar.MPV,
    price_start: 268150000,
    image: "ertiga.webp",
    variants: [
      { type: "ALL NEW ERTIGA GL MT NEW", price: 268150000 },
      { type: "ALL NEW ERTIGA GL AT NEW", price: 279200000 },
      { type: "ALL NEW ERTIGA GX HYBRID MT", price: 283250000 },
      { type: "ALL NEW ERTIGA GX HYBRID AT", price: 294400000 },
      { type: "ALL NEW ERTIGA CRUISE MT", price: 296400000 },
      { type: "ALL NEW ERTIGA CRUISE MT TWO TONE", price: 298400000 },
      { type: "ALL NEW ERTIGA CRUISE AT", price: 307400000 },
      { type: "ALL NEW ERTIGA CRUISE AT TWO TONE", price: 309400000 },
    ],
  },
  {
    id: "xl7",
    name: "XL7 Hybrid",
    category: CategoryCar.SUV,
    price_start: 272350000,
    image: "xl7.webp",
    variants: [
      { type: "XL7 ZETA MT", price: 272350000 },
      { type: "XL7 ZETA AT", price: 283500000 },
      { type: "XL7 BETA MT HYBRID", price: 294500000 },
      { type: "XL7 BETA AT HYBRID", price: 305500000 },
      { type: "XL7 ALPHA MT HYBRID", price: 304700000 },
      { type: "XL7 ALPHA MT HYBRID TWO TONE", price: 306700000 },
      { type: "XL7 ALPHA AT HYBRID", price: 315600000 },
      { type: "XL7 ALPHA AT HYBRID TWO TONE", price: 317700000 },
    ],
  },
  {
    id: "grand-vitara",
    name: "Grand Vitara",
    category: CategoryCar.SUV,
    price_start: 402125000,
    image: "grand_vitara.webp",
    variants: [
      { type: "GRAND VITARA GX AT ONE TONE", price: 402125000 },
      { type: "GRAND VITARA GX AT TWO TONE", price: 402125000 },
    ],
  },
  {
    id: "s-presso",
    name: "S-Presso",
    category: CategoryCar.CityCar,
    price_start: 181050000,
    image: "spresso.webp",
    variants: [
      { type: "SPRESSO MT", price: 181050000 },
      { type: "SPRESSO AGS", price: 191050000 },
    ],
  },
  {
    id: "jimny5doors",
    name: "Jimny 5 Doors",
    category: CategoryCar.SUV,
    price_start: 488100000,
    image: "jimny.webp",
    variants: [
      { type: "JIMNY 5 DOOR MT", price: 488100000 },
      { type: "JIMNY 5 DOOR AT", price: 501800000 },
      { type: "JIMNY 5 DOOR MT TWO TONE", price: 491100000 },
      { type: "JIMNY 5 DOOR AT TWO TONE", price: 504800000 },
      { type: "JIMNY 5 DOOR AT WHITE RHINO", price: 515900000 },
    ],
  },
  {
    id: "carry",
    name: "New Carry",
    category: CategoryCar.Pickup,
    price_start: 178500000,
    image: "carry.webp",
    variants: [
      { type: "NEW CARRY PU FD", price: 178500000 },
      { type: "NEW CARRY PU WD", price: 179600000 },
      { type: "NEW CARRY PU FD AC PS", price: 186500000 },
      { type: "NEW CARRY PU WD AC PS", price: 187400000 },
    ],
  },
  {
    id: "apv",
    name: "APV",
    category: CategoryCar.Minibus,
    price_start: 226350000,
    image: "apv.webp",
    variants: [
      { type: "APV GA", price: 226350000 },
      { type: "Arena GA", price: 195000000 },
      { type: "Arena GL", price: 205000000 },
      { type: "SGX MT", price: 215000000 },
    ],
  },
];

// dummy version
// export const DataPriceList = [
//   {
//     id: "fronx",
//     name: "Fronx",
//     category: CategoryCar.Crossover,
//     price_start: 200000000,
//     image: "fronx.webp",
//     image_all: [
//       {
//         image: "fronx.webp"
//       },
//       {
//         image: "fronx.webp"
//       }
//     ],
//     variants: [
//       { type: "Zeta MT", price: 200000000 },
//       { type: "Zeta AT", price: 210000000 },
//       { type: "Alpha MT", price: 220000000 },
//       { type: "Alpha AT", price: 230000000 },
//     ],
//   },
//   {
//     id: "ertiga",
//     name: "All New Ertiga",
//     category: CategoryCar.MPV,
//     price_start: 241600000,
//     image: "ertiga.webp",
//     variants: [
//       { type: "GA MT", price: 241600000 },
//       { type: "GL MT", price: 255000000 },
//       { type: "GL AT", price: 265000000 },
//       { type: "GX Hybrid MT", price: 275000000 },
//       { type: "GX Hybrid AT", price: 285000000 },
//     ],
//   },
//   {
//     id: "xl7",
//     name: "XL7 Hybrid",
//     category: CategoryCar.SUV,
//     price_start: 268500000,
//     image: "xl7.webp",
//     variants: [
//       { type: "MT", price: 268500000 },
//       { type: "Zeta AT", price: 278000000 },
//       { type: "Beta Hybrid MT", price: 288000000 },
//       { type: "Alpha Hybrid AT", price: 308000000 },
//     ],
//   },
//   {
//     id: "grand-vitara",
//     name: "Grand Vitara",
//     category: CategoryCar.SUV,
//     price_start: 373075000,
//     image: "grand_vitara.webp",
//     variants: [
//       { type: "GL", price: 373075000 },
//       { type: "GX", price: 395000000 },
//     ],
//   },
//   {
//     id: "s-presso",
//     name: "S-Presso",
//     category: CategoryCar.CityCar,
//     price_start: 179550000,
//     image: "spresso.webp",
//     variants: [
//       { type: "MT", price: 179550000 },
//       { type: "AGS", price: 189000000 },
//     ],
//   },
//   {
//     id: "jimny5doors",
//     name: "Jimny 5 Doors",
//     category: CategoryCar.SUV,
//     price_start: 491100000,
//     image: "jimny.webp",
//     variants: [
//       { type: "MT", price: 491100000 },
//       { type: "AT", price: 507000000 },
//     ],
//   },
//   {
//     id: "carry",
//     name: "New Carry",
//     category: CategoryCar.Pickup,
//     price_start: 178500000,
//     image: "carry.webp",
//     variants: [
//       { type: "Flat Deck", price: 178500000 },
//       { type: "Wide Deck", price: 181000000 },
//       { type: "AC Power Steering", price: 185000000 },
//     ],
//   },
//   {
//     id: "apv",
//     name: "APV",
//     category: CategoryCar.Minibus,
//     price_start: 183500000,
//     image: "apv.webp",
//     variants: [
//       { type: "Blind Van", price: 183500000 },
//       { type: "Arena GA", price: 195000000 },
//       { type: "Arena GL", price: 205000000 },
//       { type: "SGX MT", price: 215000000 },
//     ],
//   },
// ];
