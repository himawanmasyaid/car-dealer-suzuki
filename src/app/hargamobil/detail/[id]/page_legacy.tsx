"use client";

import { CHAT_WHATSAPP, formatRupiah, imageAlt } from "@/constants/constants";
import { DataPriceList } from "@/data/data_pricelist";
import { useState } from "react";

interface ProductPageParams {
  id: string;
}

interface ProductOverviewPageProps {
  params: ProductPageParams;
}

export default function ProductOverviewLegacy({ params }: ProductOverviewPageProps) {
  const car = DataPriceList.find((c) => c.id === params.id);
  const [selectedVariant, setSelectedVariant] = useState(
    car?.variants?.[0] ?? null
  );

  if (!car || !selectedVariant) {
    return <div>Mobil tidak ditemukan</div>;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row py-12 mb-24 px-4 md:px-8 gap-4 bg-white">
      {/* component image  */}
      <div className="flex-1 w-full flex items-center justify-center">
        <img
          src={`/images/${car.image}`}
          alt={imageAlt(car.name)}
          className="w-full h-auto object-contain max-h-[500px]"/>
      </div>

      {/* component car information  */}
      <div className="flex-1">
        {/* <h1 className="text-4xl font-bold">{car.name}</h1> */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Suzuki {car.name} {selectedVariant?.type || ""}
        </h1>

        <p className="text-1xl sm:text-4xl mt-6 font-bold text-gray-800">
          {formatRupiah(selectedVariant.price)}
          <span className="text-lg text-gray-500 font-normal ml-2">
            {" "}
            (OTR Yogyakarta)
          </span>
        </p>
        <p className="mt-8 text-green-600 font-medium">
          Stok tersedia dan siap kirim! Dapatkan unit Anda sekarang.
        </p>
        <p className="mt-1 text-sm text-gray-500">
          *Harga dapat berubah sewaktu-waktu. Hubungi sales kami untuk penawaran
          terbaik dan promo terbaru.
        </p>
        {/* component varian mobil */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Pilih Tipe {car.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {car.variants.map((variant) => (
              <div
                key={variant.type}
                className={`cursor-pointer border rounded-lg px-4 py-2 ${
                  selectedVariant === variant
                    ? "border-blue-600 bg-blue-50 shadow-md"
                    : "border-gray-300 bg-white hover:border-gray-400 hover:shadow-sm"
                }`}
                onClick={() => setSelectedVariant(variant)}
              >
                {/* <p className="text-sm font-bold">{variant.type}</p>
                <p className="mt-2 text-sm font-semibold text-gray-500">
                  {formatRupiah(variant.price)}
                </p> */}

                <p className="text-lg font-bold text-gray-900">
                  {variant.type}
                </p>
                <p className="mt-1 text-md font-semibold text-gray-700">
                  {formatRupiah(variant.price)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-18">
          
          <a
            href={CHAT_WHATSAPP.KONSULTASI_KREDIT(car.id)}
            className="inline-flex items-center justify-center border border-blue-600 text-blue-600 font-semibold rounded-full py-4 px-6 hover:bg-blue-100 transition"
          >
            Simulasi Kredit {car.name}
          </a>
          <a
            href={CHAT_WHATSAPP.BELI_MOBIL(car.name)}
            className="mt-2 inline-flex items-center justify-center rounded-full py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-400 transition"
          >
            Pesan {car.name} Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}