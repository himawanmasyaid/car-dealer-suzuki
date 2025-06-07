"use client";

import { DataPriceList } from "@/data/data_pricelist";
import Link from "next/link";
import { useState } from "react";

interface Params {
  id: string;
}

export default function HargaMobilDetailPage({ params }: { params: Params }) {
  
  const car = DataPriceList.find((c) => c.id === params.id);
  const [selectedVariant, setSelectedVariant] = useState(car?.variants?.[0] ?? null);

  if (!car || !selectedVariant) {
    return <div>Mobil tidak ditemukan</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow">
      {/* Gambar */}
      <div className="bg-gray-100 p-4 flex items-center justify-center">
        <img
          src={`/cars/${car.image}`}
          alt={car.name}
          className="w-full h-auto max-h-[400px] object-contain rounded-lg"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{car.name}</h1>

          {/* Varian */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pilih Tipe
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={selectedVariant.type}
              onChange={(e) =>
                setSelectedVariant(
                  car.variants.find((v) => v.type === e.target.value) ||
                    car.variants[0]
                )
              }
            >
              {car.variants.map((variant) => (
                <option key={variant.type} value={variant.type}>
                  {variant.type}
                </option>
              ))}
            </select>
          </div>

          {/* Harga */}
          <div className="text-lg text-gray-700 mb-4">
            Harga:
            <span className="text-green-600 font-semibold ml-2">
              Rp {selectedVariant.price.toLocaleString("id-ID")}
            </span>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="mt-6 flex flex-col gap-3">
          <a
            href={`/simulasikredit?id=${car.id}&type=${encodeURIComponent(
              selectedVariant.type
            )}`}
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            Hitung Kredit
          </a>
          <button
            className="inline-flex items-center justify-center rounded-full border border-green-600 px-6 py-3 text-green-600 font-semibold hover:bg-green-100 transition"
            onClick={() =>
              alert(`Pesan mobil: ${car.name} - ${selectedVariant.type}`)
            }
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
