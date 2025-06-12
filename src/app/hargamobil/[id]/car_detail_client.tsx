"use client";

import React, { useState } from "react";
import { formatRupiah, CHAT_WHATSAPP, imageAlt } from "@/constants/constants";

interface Variant {
  type: string;
  price: number;
  otr: {
    jogja: number;
    kedu: number;
  };
}

interface Car {
  id: string;
  name: string;
  image: string;
  brosur: string;
  variants: Variant[];
}

interface Props {
  car: Car;
}

export default function CarDetailClient({ car }: Props) {
  // state variant mobil
  const [selectedVariant, setSelectedVariant] = useState(car.variants[0]);
  // State untuk wilayah aktif
  const [selectedRegion, setSelectedRegion] = useState<"jogja" | "kedu">(
    "jogja"
  );

  function getRegionLabel(region: "jogja" | "kedu"): string {
    return region === "jogja" ? "Yogyakarta" : "Kedu & Banyumas";
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row py-12 mb-24 px-4 md:px-8 gap-8 bg-white">
      <div className="flex-1 flex flex-col items-center justify-center">
        <img
          src={`/images/${car.image}`}
          alt={imageAlt(car.name)}
          className="w-full h-auto object-contain"
          loading="lazy"
        />
        {car.brosur && (
          <a
            href={`/brosur/${car.brosur}`}
            download
            className="mt-4 inline-flex items-center gap-2 justify-center bg-blue-50 text-blue-700 border border-blue-600 font-semibold rounded-full py-3 px-6 hover:bg-blue-600 hover:text-white transition-colors duration-200 shadow-sm text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            <span>Download Brosur {car.name}</span>
          </a>
        )}
      </div>

      {/* Info section */}
      <div className="flex-1 flex flex-col">
        {/* Car Information */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Suzuki {car.name} {selectedVariant?.type || ""}
        </h1>

        <h2 className="mt-8 text-base font-medium text-gray-600 mb-4">
          Pilih berdasarkan wilayah harga
        </h2>

        {/* Toogle Price by region section */}
        <div className="max-w-lg w-full">
          <div className="flex w-full border border-gray-300 rounded-full overflow-hidden shadow-sm text-base font-medium">
            <button
              onClick={() => setSelectedRegion("jogja")}
              className={`w-1/2 px-4 py-3 text-center transition-colors duration-200 focus:outline-none ${
                selectedRegion === "jogja"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } rounded-full`}
            >
              Yogyakarta
            </button>
            <button
              onClick={() => setSelectedRegion("kedu")}
              className={`w-1/2 px-4 py-3 text-center transition-colors duration-200 focus:outline-none ${
                selectedRegion === "kedu"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } rounded-full`}
            >
              Kedu & Banyumas
            </button>
          </div>
        </div>

        <p className="mt-6 text-2xl sm:text-4xl font-bold text-blue-600">
          {formatRupiah(selectedVariant.otr[selectedRegion])}
          <span className="text-lg text-gray-500 font-normal ml-2">
            (OTR {getRegionLabel(selectedRegion)})
          </span>
        </p>

        {/* Variant selector */}
        <div className="mt-8">
          <h2 className="text-base font-medium text-gray-600 mb-4">
            Pilih tipe {car.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg">
            {car.variants.map((variant) => (
              <button
                key={variant.type}
                onClick={() => setSelectedVariant(variant)}
                className={`w-full text-left cursor-pointer border rounded-lg px-4 py-3 transition-shadow duration-200
                  ${
                    selectedVariant.type === variant.type
                      ? "border-blue-600 bg-blue-50 shadow-md"
                      : "border-gray-300 bg-white hover:border-gray-400 hover:shadow-sm"
                  }`}
                type="button"
              >
                <p className="text-lg font-bold text-gray-900">
                  {variant.type}
                </p>
                <p className="mt-1 text-md font-semibold text-gray-700">
                  {formatRupiah(variant.otr[selectedRegion])}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Infomation */}

        <p className="mt-8 text-green-600 font-medium">
          Stok tersedia dan siap kirim! Dapatkan unit Anda sekarang.
        </p>

        <p className="mt-1 text-sm text-gray-500 max-w-md">
          *Harga dapat berubah sewaktu-waktu. Hubungi sales kami untuk penawaran
          terbaik dan promo terbaru.
        </p>

        {/* Action buttons */}

        <div className="flex justify-center flex-col gap-3 mt-8 max-w-lg">
          <a
            href={CHAT_WHATSAPP.BELI_MOBIL(
              car.name,
              selectedVariant.type,
              getRegionLabel(selectedRegion),
              selectedVariant.otr[selectedRegion]
            )}
            className="inline-flex items-center justify-center rounded-full py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-400 transition"
          >
            Pesan {car.name} Sekarang
          </a>
          <a
            href={CHAT_WHATSAPP.KONSULTASI_KREDIT(
              car.id,
              selectedVariant.type,
              getRegionLabel(selectedRegion),
              selectedVariant.otr[selectedRegion]
            )}
            className="mt-2 inline-flex items-center justify-center border border-blue-600 text-blue-600 font-semibold rounded-full py-4 px-6 hover:bg-blue-100 transition"
          >
            Simulasi Kredit {car.name}
          </a>

          <p className="mt-2 text-sm text-center justify-center text-gray-400 font-normal">
            Simulasi kredit dibantu hitung secara personal oleh Regi
          </p>
        </div>
      </div>
    </div>
  );
}
