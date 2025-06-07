"use client";

import { CHAT_WHATSAPP, formatRupiah, imageAlt } from "@/constants/constants";
import { DataPriceList } from "@/data/data_pricelist";
import { useState } from "react";

interface Params {
  id: string;
}

export default function ProductOverview({ params }: { params: Params }) {
  const car = DataPriceList.find((c) => c.id === params.id);
  const [selectedVariant, setSelectedVariant] = useState(
    car?.variants?.[0] ?? null
  );

  if (!car || !selectedVariant) {
    return <div>Mobil tidak ditemukan</div>;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row py-16 px-4 md:px-8 gap-4 bg-white">
      {/* component image  */}
      <div className="flex-1 w-full flex items-center justify-center">
        <img
          src={`/images/${car.image}`}
          alt={imageAlt(car.name)}
          className="justify-top items-center"
        />
        {/* <img
          src="/images/fronx.webp"
          alt={imageAlt(car.na)}
          className="justify-top items-center"
        /> */}
      </div>

      {/* component car information  */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold">{car.name}</h2>
        <p className="text-xl mt-2 font-semibold text-gray-800">
          {formatRupiah(selectedVariant.price)}
        </p>
        <p className="mt-4 text-green-600">Stok tersedia dan siap kirim</p>

        {/* component varian mobil */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Varian Mobil</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-2">
            {car.variants.map((variant) => (
              <div
                key={variant.type}
                className={`cursor-pointer border rounded-lg px-4 py-2 ${
                  selectedVariant === variant
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedVariant(variant)}
              >
                <p className="text-sm font-bold">{variant.type}</p>
                <p className="mt-2 text-sm font-semibold text-gray-500">
                  {formatRupiah(variant.price)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-18">
          <p className="mb-2 text-gray-500">Dapatkan segera</p>

          <a
            href={CHAT_WHATSAPP.SIMULASI_KREDIT_MOBIL(car.id)}
            className="inline-flex items-center justify-center font-medium border border-blue-600 text-blue-600 rounded-full py-4 px-6 hover:bg-blue-100 transition"
          >
            Konsultasi Kredit
          </a>
          <a
            href={CHAT_WHATSAPP.BELI_MOBIL(car.name)}
            className="mt-2 inline-flex items-center justify-center rounded-full py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-400 transition"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
