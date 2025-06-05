"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function DetailMobilPage() {
  
  const params = useParams();
  const carId = params?.id;

  const dummyCar = {
    name: "Suzuki Ertiga Hybrid",
    price: "Rp 290.000.000",
    image: "/cars/ertiga.jpg",
    specs: [
      { label: "Tipe Mesin", value: "1.5L Hybrid" },
      { label: "Transmisi", value: "Automatic CVT" },
      { label: "Kapasitas Penumpang", value: "7 Orang" },
      { label: "Warna", value: "Putih, Hitam, Silver" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{dummyCar.name}</h1>
          <Link
            href="/products"
            className="text-sm text-blue-600 hover:underline"
          >
            ← Kembali ke Daftar Mobil
          </Link>
        </div>

        {/* Konten */}
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src={dummyCar.image}
            alt={dummyCar.name}
            className="rounded-lg w-full h-auto object-cover"
          />

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Harga: <span className="text-green-600">{dummyCar.price}</span>
            </h2>
            <ul className="space-y-2">
              {dummyCar.specs.map((spec, index) => (
                <li
                  key={index}
                  className="flex justify-between text-sm border-b pb-1"
                >
                  <span className="text-gray-600">{spec.label}</span>
                  <span className="text-gray-900">{spec.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={`/simulasikredit?id=${carId}`}
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
              >
                Ajukan Kredit
              </Link>
              <Link
                href="/testimoni"
                className="text-center text-sm text-gray-500 hover:underline"
              >
                Lihat Testimoni Pelanggan →
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 mt-8">
          ID Mobil: {carId}
        </p>
      </div>
    </div>
  );
}
