// app/hargamobil/detail/[id]/ProductDetailsClient.tsx (atau components/ProductDetailsClient.tsx)
"use client"; // INI ADALAH CLIENT COMPONENT

import React, { useState } from 'react';
import Image from 'next/image'; // Pastikan ini diimpor untuk penggunaan gambar
import { CHAT_WHATSAPP, formatRupiah, imageAlt } from "@/constants/constants"; // Pastikan path benar

// --- Interfaces for Type Safety (diulang atau diimpor jika dari file terpisah) ---
interface CarVariant {
  type: string;
  price: number;
  // ... properti lain jika ada
}

interface CarData {
  id: string;
  name: string;
  image: string;
  category: string;
  price_start: number;
  variants: CarVariant[];
  // ... properti lain
}

interface ProductDetailsClientProps {
  carData: CarData;
  initialSelectedVariant: CarVariant | null; // Bisa null jika tidak ada varian
}

// --- ProductDetailsClient Component ---
const ProductDetailsClient: React.FC<ProductDetailsClientProps> = ({ carData, initialSelectedVariant }) => {
  const [selectedVariant, setSelectedVariant] = useState<CarVariant | null>(initialSelectedVariant);

  // Fallback jika tidak ada varian yang dipilih (misal: data tidak lengkap)
  if (!selectedVariant && carData.variants.length > 0) {
    setSelectedVariant(carData.variants[0]); // Set varian pertama sebagai default
  }

  const currentPrice = selectedVariant ? selectedVariant.price : carData.price_start;
  const currentVariantType = selectedVariant ? selectedVariant.type : "";

  return (
    <div className="min-h-screen flex flex-col lg:flex-row py-12 mb-24 px-4 md:px-8 gap-8 bg-white">
      {/* Gambar Mobil (Client Component) */}
      <div className="lg:w-1/2 flex items-center justify-center relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
        <Image
          src={`/images/${carData.image}`} // Pastikan path benar
          alt={imageAlt(carData.name)}
          fill // Membuat gambar mengisi parent
          priority // Penting untuk gambar utama di hero
          className="object-contain" // Menjaga rasio aspek gambar
        />
      </div>

      {/* Informasi Mobil */}
      <div className="lg:w-1/2 p-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Suzuki {carData.name} {currentVariantType || ""}
        </h1>

        <p className="text-1xl sm:text-4xl mt-6 font-bold text-gray-800">
          {formatRupiah(currentPrice)}
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

        {/* Varian Mobil */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Pilih Tipe {carData.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {carData.variants.map((variant: CarVariant) => (
              <div
                key={variant.type} // Pastikan variant.type unik
                className={`cursor-pointer border rounded-lg px-4 py-2 ${
                  selectedVariant?.type === variant.type // Membandingkan properti .type
                    ? "border-blue-600 bg-blue-50 shadow-md"
                    : "border-gray-300 bg-white hover:border-gray-400 hover:shadow-sm"
                }`}
                onClick={() => setSelectedVariant(variant)}
              >
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

        {/* Tombol Aksi */}
        <div className="flex flex-col gap-2 mt-18">
          <a
            href={CHAT_WHATSAPP.KONSULTASI_KREDIT(carData.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-blue-600 text-blue-600 font-semibold rounded-full py-4 px-6 hover:bg-blue-100 transition"
          >
            Simulasi Kredit {carData.name}
          </a>
          <a
            href={CHAT_WHATSAPP.BELI_MOBIL(carData.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center rounded-full py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-400 transition"
          >
            Pesan {carData.name} Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsClient;