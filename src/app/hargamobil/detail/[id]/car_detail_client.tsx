"use client";

import React, { useState } from "react";
import { formatRupiah, CHAT_WHATSAPP, imageAlt } from "@/constants/constants";

interface Variant {
  type: string;
  price: number;
}

interface Car {
  id: string;
  name: string;
  image: string;
  variants: Variant[];
}

interface Props {
  car: Car;
}

export default function CarDetailClient({ car }: Props) {
  const [selectedVariant, setSelectedVariant] = useState(car.variants[0]);

return (
    <div className="min-h-screen flex flex-col md:flex-row py-12 mb-24 px-4 md:px-8 gap-8 bg-white">
      {/* Image section */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={`/images/${car.image}`}
          alt={imageAlt(car.name)}
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Info section */}
      <div className="flex-1 flex flex-col">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Suzuki {car.name} {selectedVariant?.type || ""}
        </h1>

        <p className="mt-6 text-2xl sm:text-4xl font-bold text-gray-800">
          {formatRupiah(selectedVariant.price)}
          <span className="text-lg text-gray-500 font-normal ml-2">
            (OTR Yogyakarta)
          </span>
        </p>

        <p className="mt-8 text-green-600 font-medium">
          Stok tersedia dan siap kirim! Dapatkan unit Anda sekarang.
        </p>

        <p className="mt-1 text-sm text-gray-500 max-w-md">
          *Harga dapat berubah sewaktu-waktu. Hubungi sales kami untuk penawaran terbaik dan promo terbaru.
        </p>

        {/* Variant selector */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Pilih Tipe {car.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
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
                <p className="text-lg font-bold text-gray-900">{variant.type}</p>
                <p className="mt-1 text-md font-semibold text-gray-700">
                  {formatRupiah(variant.price)}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3 mt-12 max-w-md">
          <a
            href={CHAT_WHATSAPP.KONSULTASI_KREDIT(car.id)}
            className="inline-flex items-center justify-center border border-blue-600 text-blue-600 font-semibold rounded-full py-4 px-6 hover:bg-blue-100 transition"
          >
            Simulasi Kredit {car.name}
          </a>
          <a
            href={CHAT_WHATSAPP.BELI_MOBIL(car.name)}
            className="inline-flex items-center justify-center rounded-full py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-400 transition"
          >
            Pesan {car.name} Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
