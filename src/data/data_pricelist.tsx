import { CarId } from "./car_id";
import { CategoryCar } from "./category_car";

export interface CarImage {
  image: string;
  alt?: string;
}

export interface CarVariant {
  type: string;
  otr: {
    jogja: number;
    kedu: number;
  };
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
  // --- FRONX ---
  {
    id: CarId.Fronx,
    name: "Fronx",
    category: CategoryCar.Crossover,
    price_start: 263800000,
    otr_start: { jogja: 263800000, kedu: 271500000 },
    image: "fronx.webp",
    brosur: "suzuki_fronx_brosur.pdf",
    image_all: [{ image: "fronx.webp" }],
    variants: [
      {
        type: "FRONX GL MT",
        otr: { jogja: 263800000, kedu: 271500000 },
      },
      {
        type: "FRONX GL AT",
        otr: { jogja: 275800000, kedu: 283900000 },
      },
      {
        type: "FRONX GX MT",
        otr: { jogja: 280800000, kedu: 289100000 },
      },
      {
        type: "FRONX GX AT",
        otr: { jogja: 298800000, kedu: 307400000 },
      },
      {
        type: "FRONX SGX AT",
        otr: { jogja: 324800000, kedu: 333800000 },
      },
    ],
  },

  // --- ALL NEW ERTIGA ---
  {
    id: CarId.Ertiga,
    name: "All New Ertiga",
    category: CategoryCar.MPV,
    price_start: 268150000,
    otr_start: { jogja: 263200000, kedu: 279000000 },
    image: "ertiga.webp",
    brosur: "ertiga_hybrid_brochure_1721793313877.pdf",
    variants: [
      {
        type: "ALL NEW ERTIGA GL MT",
        otr: { jogja: 268150000, kedu: 279000000 },
      },
      {
        type: "ALL NEW ERTIGA GL AT",
        otr: { jogja: 279200000, kedu: 290700000 },
      },
      {
        type: "ALL NEW ERTIGA GX MT HYBRID",
        otr: { jogja: 283900000, kedu: 293200000 },
      },
      {
        type: "ALL NEW ERTIGA GX AT HYBRID",
        otr: { jogja: 294400000, kedu: 304800000 },
      },
      {
        type: "ALL NEW ERTIGA CRUISE MT",
        otr: { jogja: 296400000, kedu: 306900000 },
      },
      {
        type: "ALL NEW ERTIGA CRUISE AT",
        otr: { jogja: 307600000, kedu: 318300000 },
      },
      {
        type: "ALL NEW ERTIGA CRUISE AT 2TONE",
        otr: { jogja: 309600000, kedu: 320300000 },
      },
    ],
  },

  // --- XL7 HYBRID ---
  {
    id: CarId.XL7,
    name: "XL7 Hybrid",
    category: CategoryCar.SUV,
    price_start: 272350000,
    otr_start: { jogja: 272350000, kedu: 282700000 },
    image: "xl7.webp",
    brosur: "new-XL7-hybride-brochure_1701949135372.pdf",
    variants: [
      {
        type: "XL7 ZETA MT",
        otr: { jogja: 272350000, kedu: 283700000 },
      },
      {
        type: "XL7 ZETA AT",
        otr: { jogja: 283500000, kedu: 295300000 },
      },
      {
        type: "XL7 BETA MT HYBRID",
        otr: { jogja: 294800000, kedu: 306700000 },
      },
      {
        type: "XL7 BETA AT HYBRID",
        otr: { jogja: 305500000, kedu: 318300000 },
      },
      {
        type: "XL7 ALPHA MT HYBRID",
        otr: { jogja: 304800000, kedu: 316900000 },
      },
      {
        type: "XL7 ALPHA AT HYBRID",
        otr: { jogja: 315600000, kedu: 328400000 },
      },
      {
        type: "XL7 ALPHA AT HYBRID 2TONE",
        otr: { jogja: 317700000, kedu: 330500000 },
      },
    ],
  },

  // --- GRAND VITARA ---
  {
    id: CarId.GrandVitara,
    name: "Grand Vitara",
    category: CategoryCar.SUV,
    price_start: 402125000,
    otr_start: { jogja: 402125000, kedu: 41812500000 },
    image: "grand_vitara.webp",
    brosur: "brosur_grandvitara_1711950919637.pdf",
    variants: [
     
      {
        type: "GRAND VITARA GX AT",
        otr: { jogja: 402125000, kedu: 418900000 },
      },
      {
        type: "GRAND VITARA GX AT 2TONE",
        otr: { jogja: 394725000, kedu: 421900000 },
      },
    ],
  },

  // --- S-PRESSO ---
  {
    id: CarId.SPresso,
    name: "S-Presso",
    category: CategoryCar.CityCar,
    price_start: 178250000,
    otr_start: { jogja: 178250000, kedu: 187400000 },
    image: "spresso.webp",
    brosur: "brosur_spresso_1723697269550.pdf",
    variants: [
      {
        type: "S‑PRESSO MT",
        otr: { jogja: 178250000, kedu: 187400000 },
      },
      {
        type: "S‑PRESSO AGS",
        otr: { jogja: 188250000, kedu: 197900000 },
      },
    ],
  },

  // --- JIMNY 5 DOORS ---
  {
    id: CarId.Jimny5Doors,
    name: "Jimny 5 Doors",
    category: CategoryCar.SUV,
    price_start: 473900000,
    otr_start: { jogja: 473900000, kedu: 511900000 },
    image: "jimny.webp",
    brosur: "jimny1_1723697158910.pdf",
    variants: [
      {
        type: "JIMNY 5 DOOR MT",
        otr: { jogja: 473900000, kedu: 511900000 },
      },
      {
        type: "JIMNY 5 DOOR AT",
        otr: { jogja: 487600000, kedu: 526300000 },
      },
      {
        type: "JIMNY 5 DOOR MT 2TONE",
        otr: { jogja: 491100000, kedu: 514900000 },
      },
      {
        type: "JIMNY 5 DOOR AT 2TONE",
        otr: { jogja: 504800000, kedu: 529300000 },
      },
    ],
  },

  // --- NEW CARRY PICK UP ---
  {
    id: CarId.Carry,
    name: "New Carry",
    category: CategoryCar.Pickup,
    price_start: 178500000,
    otr_start: { jogja: 178500000, kedu: 185100000 },
    image: "carry.webp",
    brosur: "brosur_carry_1729575408920.pdf",
    variants: [
      {
        type: "NEW CARRY UP FD",
        otr: { jogja: 178500000, kedu: 185100000 },
      },
      {
        type: "NEW CARRY UP WD",
        otr: { jogja: 179600000, kedu: 186200000 },
      },
      {
        type: "NEW CARRY UP FD AC PS",
        otr: { jogja: 186500000, kedu: 193400000 },
      },
      {
        type: "NEW CARRY UP WD AC PS",
        otr: { jogja: 187400000, kedu: 194300000 },
      },
    ],
  },

  // --- APV ---
  {
    id: CarId.APV,
    name: "APV",
    category: CategoryCar.Minibus,
    price_start: 183500000,
    otr_start: { jogja: 183500000, kedu: 183500000 },
    image: "apv.webp",
    brosur: "",
    variants: [
      {
        type: "APV BLIND VAN",
        otr: { jogja: 183500000, kedu: 183500000 },
      },
      {
        type: "APV GE2‑PS",
        otr: { jogja: 225000000, kedu: 225000000 },
      },
      {
        type: "APV GL MT",
        otr: { jogja: 233200000, kedu: 233200000 },
      },
      {
        type: "APV GX MT",
        otr: { jogja: 247300000, kedu: 247300000 },
      },
      {
        type: "APV SGX MT",
        otr: { jogja: 250550000, kedu: 250550000 },
      },
    ],
  },
];

// OLD DATA

// export const DataPriceList = [
//   // --- FRONX ---
//   {
//     id: CarId.Fronx,
//     name: "Fronx",
//     category: CategoryCar.Crossover,
//     price_start: 263800000,
//     otr_start: { jogja: 263800000, kedu: 271500000 },
//     image: "fronx.webp",
//     brosur: "suzuki_fronx_brosur.pdf",
//     image_all: [{ image: "fronx.webp" }],
//     variants: [
//       {
//         type: "FRONX GL MT",
//         price: 263800000,
//         otr: { jogja: 263800000, kedu: 271500000 },
//       },
//       {
//         type: "FRONX GL AT",
//         price: 275800000,
//         otr: { jogja: 275800000, kedu: 283900000 },
//       },
//       {
//         type: "FRONX GX MT",
//         price: 280800000,
//         otr: { jogja: 280800000, kedu: 289100000 },
//       },
//       {
//         type: "FRONX GX AT",
//         price: 298800000,
//         otr: { jogja: 298800000, kedu: 307400000 },
//       },
//       {
//         type: "FRONX SGX AT",
//         price: 324800000,
//         otr: { jogja: 324800000, kedu: 333800000 },
//       },
//     ],
//   },

//   // --- ALL NEW ERTIGA ---
//   {
//     id: CarId.Ertiga,
//     name: "All New Ertiga",
//     category: CategoryCar.MPV,
//     price_start: 263200000,
//     otr_start: { jogja: 263200000, kedu: 274200000 },
//     image: "ertiga.webp",
//     brosur: "ertiga_hybrid_brochure_1721793313877.pdf",
//     variants: [
//       {
//         type: "GL MT",
//         price: 263200000,
//         otr: { jogja: 263200000, kedu: 274200000 },
//       },
//       {
//         type: "GL AT",
//         price: 274200000,
//         otr: { jogja: 274200000, kedu: 290700000 },
//       },
//       {
//         type: "GX MT HYBRID",
//         price: 283900000,
//         otr: { jogja: 283900000, kedu: 293200000 },
//       },
//       {
//         type: "GX AT HYBRID",
//         price: 295000000,
//         otr: { jogja: 295000000, kedu: 304800000 },
//       },
//       {
//         type: "ALL NEW ERTIGA CRUISE MT",
//         price: 302400000,
//         otr: { jogja: 302400000, kedu: 306900000 },
//       },
//       {
//         type: "ALL NEW ERTIGA CRUISE AT",
//         price: 307600000,
//         otr: { jogja: 307600000, kedu: 318300000 },
//       },
//       {
//         type: "ALL NEW ERTIGA CRUISE AT 2TONE",
//         price: 309600000,
//         otr: { jogja: 309600000, kedu: 320300000 },
//       },
//     ],
//   },

//   // --- XL7 HYBRID ---
//   {
//     id: CarId.XL7,
//     name: "XL7 Hybrid",
//     category: CategoryCar.SUV,
//     price_start: 266900000,
//     otr_start: { jogja: 266900000, kedu: 278000000 },
//     image: "xl7.webp",
//     brosur: "new-XL7-hybride-brochure_1701949135372.pdf",
//     variants: [
//       {
//         type: "XL7 ZETA MT",
//         price: 266900000,
//         otr: { jogja: 266900000, kedu: 278000000 },
//       },
//       {
//         type: "XL7 ZETA AT",
//         price: 278000000,
//         otr: { jogja: 278000000, kedu: 281800000 },
//       },
//       {
//         type: "XL7 BETA MT HYBRID",
//         price: 294800000,
//         otr: { jogja: 294800000, kedu: 298700000 },
//       },
//       {
//         type: "XL7 BETA AT HYBRID",
//         price: 305800000,
//         otr: { jogja: 305800000, kedu: 307400000 },
//       },
//       {
//         type: "XL7 ALPHA MT HYBRID",
//         price: 304800000,
//         otr: { jogja: 304800000, kedu: 310800000 },
//       },
//       {
//         type: "XL7 ALPHA AT HYBRID",
//         price: 315800000,
//         otr: { jogja: 315800000, kedu: 319850000 },
//       },
//       {
//         type: "XL7 ALPHA AT HYBRID 2TONE",
//         price: 317800000,
//         otr: { jogja: 317800000, kedu: 321900000 },
//       },
//     ],
//   },

//   // --- GRAND VITARA ---
//   {
//     id: CarId.GrandVitara,
//     name: "Grand Vitara",
//     category: CategoryCar.SUV,
//     price_start: 366725000,
//     otr_start: { jogja: 366725000, kedu: 391725000 },
//     image: "grand_vitara.webp",
//     brosur: "brosur_grandvitara_1711950919637.pdf",
//     variants: [
//       {
//         type: "GRAND VITARA GL AT",
//         price: 366725000,
//         otr: { jogja: 366725000, kedu: 391725000 },
//       },
//       {
//         type: "GRAND VITARA GX AT",
//         price: 391725000,
//         otr: { jogja: 391725000, kedu: 402075000 },
//       },
//       {
//         type: "GRAND VITARA GX AT 2TONE",
//         price: 394725000,
//         otr: { jogja: 394725000, kedu: 405125000 },
//       },
//     ],
//   },

//   // --- S-PRESSO ---
//   {
//     id: CarId.SPresso,
//     name: "S-Presso",
//     category: CategoryCar.CityCar,
//     price_start: 178250000,
//     otr_start: { jogja: 178250000, kedu: 179550000 },
//     image: "spresso.webp",
//     brosur: "brosur_spresso_1723697269550.pdf",
//     variants: [
//       {
//         type: "S‑PRESSO MT",
//         price: 178250000,
//         otr: { jogja: 178250000, kedu: 179550000 },
//       },
//       {
//         type: "S‑PRESSO AGS",
//         price: 188250000,
//         otr: { jogja: 188250000, kedu: 189550000 },
//       },
//     ],
//   },

//   // --- JIMNY 5 DOORS ---
//   {
//     id: CarId.Jimny5Doors,
//     name: "Jimny 5 Doors",
//     category: CategoryCar.SUV,
//     price_start: 473900000,
//     otr_start: { jogja: 473900000, kedu: 488100000 },
//     image: "jimny.webp",
//     brosur: "jimny1_1723697158910.pdf",
//     variants: [
//       {
//         type: "JIMNY 5 DOOR MT",
//         price: 473900000,
//         otr: { jogja: 473900000, kedu: 488100000 },
//       },
//       {
//         type: "JIMNY 5 DOOR AT",
//         price: 487600000,
//         otr: { jogja: 487600000, kedu: 501800000 },
//       },
//       {
//         type: "JIMNY 5 DOOR MT 2TONE",
//         price: 491100000,
//         otr: { jogja: 491100000, kedu: 491100000 },
//       },
//       {
//         type: "JIMNY 5 DOOR AT 2TONE",
//         price: 504800000,
//         otr: { jogja: 504800000, kedu: 504800000 },
//       },
//     ],
//   },

//   // --- NEW CARRY PICK UP ---
//   {
//     id: CarId.Carry,
//     name: "New Carry",
//     category: CategoryCar.Pickup,
//     price_start: 178500000,
//     otr_start: { jogja: 178500000, kedu: 179600000 },
//     image: "carry.webp",
//     brosur: "brosur_carry_1729575408920.pdf",
//     variants: [
//       {
//         type: "NEW CARRY UP FD",
//         price: 178500000,
//         otr: { jogja: 178500000, kedu: 185100000 },
//       },
//       {
//         type: "NEW CARRY UP WD",
//         price: 179600000,
//         otr: { jogja: 179600000, kedu: 186200000 },
//       },
//       {
//         type: "NEW CARRY UP FD AC PS",
//         price: 186500000,
//         otr: { jogja: 186500000, kedu: 193400000 },
//       },
//       {
//         type: "NEW CARRY UP WD AC PS",
//         price: 187400000,
//         otr: { jogja: 187400000, kedu: 194300000 },
//       },
//     ],
//   },

//   // --- APV ---
//   {
//     id: CarId.APV,
//     name: "APV",
//     category: CategoryCar.Minibus,
//     price_start: 183500000,
//     otr_start: { jogja: 183500000, kedu: 225000000 },
//     image: "apv.webp",
//     brosur: "",
//     variants: [
//       {
//         type: "APV BLIND VAN",
//         price: 183500000,
//         otr: { jogja: 183500000, kedu: 183500000 },
//       },
//       {
//         type: "APV GE2‑PS",
//         price: 225000000,
//         otr: { jogja: 225000000, kedu: 225000000 },
//       },
//       {
//         type: "APV GL MT",
//         price: 233200000,
//         otr: { jogja: 233200000, kedu: 233200000 },
//       },
//       {
//         type: "APV GX MT",
//         price: 247300000,
//         otr: { jogja: 247300000, kedu: 247300000 },
//       },
//       {
//         type: "APV SGX MT",
//         price: 250550000,
//         otr: { jogja: 250550000, kedu: 250550000 },
//       },
//     ],
//   },
// ];

// OLD DATA

// export const DataPriceList = [
//   {
//     id: "fronx",
//     name: "Fronx",
//     category: CategoryCar.Crossover,
//     price_start: 263800000,
//     image: "fronx.webp",
//     image_all: [
//       {
//         image: "fronx.webp",
//       },
//       {
//         image: "fronx.webp",
//       },
//     ],
//     variants: [
//       {
//         type: "FRONX GL MT",
//         price: 263800000,
//         otr: {
//           jogja: 263800000,
//           kedu: 263800000,
//         },
//       },
//       {
//         type: "FRONX GL AT",
//         price: 275800000,
//         otr: {
//           jogja: 263800000,
//           kedu: 263800000,
//         },
//       },
//       {
//         type: "FRONX GX MT",
//         price: 280800000,
//         otr: {
//           jogja: 263800000,
//           kedu: 263800000,
//         },
//       },
//       {
//         type: "FRONX GX AT",
//         price: 298800000,
//         otr: {
//           jogja: 263800000,
//           kedu: 263800000,
//         },
//       },
//       {
//         type: "FRONX SGX",
//         price: 324800000,
//         otr: {
//           jogja: 263800000,
//           kedu: 263800000,
//         },
//       },
//       {
//         type: "FRONX SGX TWO TONE",
//         price: 326800000,
//         otr: {
//           jogja: 263800000,
//           kedu: 263800000,
//         },
//       },
//     ],
//   },
//   {
//     id: "ertiga",
//     name: "All New Ertiga",
//     category: CategoryCar.MPV,
//     price_start: 268150000,
//     image: "ertiga.webp",
//     variants: [
//       { type: "ALL NEW ERTIGA GL MT NEW", price: 268150000 },
//       { type: "ALL NEW ERTIGA GL AT NEW", price: 279200000 },
//       { type: "ALL NEW ERTIGA GX HYBRID MT", price: 283250000 },
//       { type: "ALL NEW ERTIGA GX HYBRID AT", price: 294400000 },
//       { type: "ALL NEW ERTIGA CRUISE MT", price: 296400000 },
//       { type: "ALL NEW ERTIGA CRUISE MT TWO TONE", price: 298400000 },
//       { type: "ALL NEW ERTIGA CRUISE AT", price: 307400000 },
//       { type: "ALL NEW ERTIGA CRUISE AT TWO TONE", price: 309400000 },
//     ],
//   },
//   {
//     id: "xl7",
//     name: "XL7 Hybrid",
//     category: CategoryCar.SUV,
//     price_start: 272350000,
//     image: "xl7.webp",
//     variants: [
//       { type: "XL7 ZETA MT", price: 272350000 },
//       { type: "XL7 ZETA AT", price: 283500000 },
//       { type: "XL7 BETA MT HYBRID", price: 294500000 },
//       { type: "XL7 BETA AT HYBRID", price: 305500000 },
//       { type: "XL7 ALPHA MT HYBRID", price: 304700000 },
//       { type: "XL7 ALPHA MT HYBRID TWO TONE", price: 306700000 },
//       { type: "XL7 ALPHA AT HYBRID", price: 315600000 },
//       { type: "XL7 ALPHA AT HYBRID TWO TONE", price: 317700000 },
//     ],
//   },
//   {
//     id: "grand-vitara",
//     name: "Grand Vitara",
//     category: CategoryCar.SUV,
//     price_start: 402125000,
//     image: "grand_vitara.webp",
//     variants: [
//       { type: "GRAND VITARA GX AT ONE TONE", price: 402125000 },
//       { type: "GRAND VITARA GX AT TWO TONE", price: 402125000 },
//     ],
//   },
//   {
//     id: "s-presso",
//     name: "S-Presso",
//     category: CategoryCar.CityCar,
//     price_start: 181050000,
//     image: "spresso.webp",
//     variants: [
//       { type: "SPRESSO MT", price: 181050000 },
//       { type: "SPRESSO AGS", price: 191050000 },
//     ],
//   },
//   {
//     id: "jimny5doors",
//     name: "Jimny 5 Doors",
//     category: CategoryCar.SUV,
//     price_start: 488100000,
//     image: "jimny.webp",
//     variants: [
//       { type: "JIMNY 5 DOOR MT", price: 488100000 },
//       { type: "JIMNY 5 DOOR AT", price: 501800000 },
//       { type: "JIMNY 5 DOOR MT TWO TONE", price: 491100000 },
//       { type: "JIMNY 5 DOOR AT TWO TONE", price: 504800000 },
//       { type: "JIMNY 5 DOOR AT WHITE RHINO", price: 515900000 },
//     ],
//   },
//   {
//     id: "carry",
//     name: "New Carry",
//     category: CategoryCar.Pickup,
//     price_start: 178500000,
//     image: "carry.webp",
//     variants: [
//       { type: "NEW CARRY PU FD", price: 178500000 },
//       { type: "NEW CARRY PU WD", price: 179600000 },
//       { type: "NEW CARRY PU FD AC PS", price: 186500000 },
//       { type: "NEW CARRY PU WD AC PS", price: 187400000 },
//     ],
//   },
//   {
//     id: "apv",
//     name: "APV",
//     category: CategoryCar.Minibus,
//     price_start: 226350000,
//     image: "apv.webp",
//     variants: [
//       { type: "APV GA", price: 226350000 },
//       { type: "Arena GA", price: 235550000 },
//       { type: "Arena GL", price: 248650000 },
//       { type: "SGX MT", price: 251950000 },
//     ],
//   },
// ];
