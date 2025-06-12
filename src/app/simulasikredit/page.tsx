"use client";

import { CHAT_WHATSAPP } from "@/constants/constants";
import { DataPriceList } from "@/data/data_pricelist";
import React, { useState, useEffect } from "react";

export default function SimulasiKreditPage() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [carPrice, setCarPrice] = useState<number | null>(null);
  const [downPaymentInput, setDownPaymentInput] = useState<string>("");
  const [downPaymentNumeric, setDownPaymentNumeric] = useState<number>(0);
  const [selectedRegion, setSelectedRegion] = useState<"jogja" | "kedu">(
    "jogja"
  );
  // Reset variant and price when model changes
  useEffect(() => {
    setSelectedVariant(null);
    setCarPrice(null);
  }, [selectedModel]);

  // Update car price when variant changes
  useEffect(() => {
    if (selectedModel && selectedVariant) {
      const modelData = DataPriceList.find((car) => car.id === selectedModel);
      const variantData = modelData?.variants.find(
        (v) => v.type === selectedVariant
      );
      setCarPrice(variantData ? variantData.otr.jogja : null);
    }
  }, [selectedModel, selectedVariant]);

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(event.target.value === "" ? null : event.target.value);
  };

  const handleVariantChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVariant(event.target.value === "" ? null : event.target.value);
  };

  const handleDownPaymentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const rawValue = event.target.value;
    // Hapus semua karakter selain angka dari input
    const numericValueString = rawValue.replace(/\D/g, "");

    // Update kedua state
    setDownPaymentInput(numericValueString);
    setDownPaymentNumeric(parseFloat(numericValueString || "0")); // Ubah ke angka
  };

  const formatPrice = (price: number | null) => {
    if (price === null) return "Pilih Tipe Mobil";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Pastikan semua data yang dibutuhkan ada sebelum memanggil CHAT_WHATSAPP.SIMULASI_KREDIT
    if (
      selectedModel &&
      selectedVariant &&
      carPrice !== null &&
      downPaymentNumeric > 0
    ) {
      const modelName =
        DataPriceList.find((car) => car.id === selectedModel)?.name ||
        "Model Tidak Diketahui";

      const whatsappUrl = CHAT_WHATSAPP.SIMULASI_KREDIT(
        modelName,
        selectedVariant,
        carPrice,
        downPaymentNumeric
      );
      window.open(whatsappUrl, "_blank");
    } else {
      alert(
        "Mohon lengkapi semua pilihan Model, Tipe, dan Nominal DP (minimal lebih dari 0)."
      );
    }
  };

  const availableVariants = selectedModel
    ? DataPriceList.find((car) => car.id === selectedModel)?.variants || []
    : [];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
        {/* H1: Judul Utama Halaman - Fokus pada Keyword Utama */}
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-balance text-gray-950 sm:text-5xl lg:text-6xl">
          Simulasi Kredit
          <br />
          Mobil Suzuki di Jogja
        </h1>

        {/* H2: Sub-judul Penjelasan & Niat Pengguna */}
        <h2 className="mx-auto mt-6 text-xl tracking-tight text-center max-w-3xl text-gray-600">
          Dapatkan estimasi cicilan dan Down Payment (DP) untuk mobil Suzuki
          impian Anda di Yogyakarta. Pilih model, tipe, dan masukkan nominal DP
          Anda.
        </h2>

        {/* Formulir Simulasi Kredit */}
        <form
          onSubmit={handleSubmit}
          className="mt-16 mx-auto max-w-lg bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-6">
            <label
              htmlFor="model-mobil"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Pilih Model Mobil <span className="text-red-500">*</span>
            </label>
            <select
              id="model-mobil"
              name="model-mobil"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={selectedModel || ""}
              onChange={handleModelChange}
              required
            >
              <option value="">-- Pilih Model --</option>
              {DataPriceList.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="tipe-mobil"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Pilih Tipe Mobil <span className="text-red-500">*</span>
            </label>
            <select
              id="tipe-mobil"
              name="tipe-mobil"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={selectedVariant || ""}
              onChange={handleVariantChange}
              disabled={!selectedModel} // Disable until model is selected
              required
            >
              <option value="">-- Pilih Tipe --</option>
              {availableVariants.map((variant) => (
                <option key={variant.type} value={variant.type}>
                  {variant.type}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="harga-mobil"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Harga Mobil (OTR Yogyakarta)
            </label>
            <input
              type="text"
              id="harga-mobil"
              name="harga-mobil"
              className="mt-1 block w-full px-3 py-4 text-base bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none cursor-not-allowed"
              value={formatPrice(carPrice)}
              readOnly
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="dp-nominal"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nominal Down Payment (DP) <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">Rp</span>
              </div>
              <input
                type="text"
                id="dp-nominal"
                name="dp-nominal"
                className="block w-full py-4 rounded-md border-gray-300 pl-10 pr-12 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Contoh: 50.000.000"
                value={new Intl.NumberFormat("id-ID").format(
                  parseFloat(downPaymentInput || "0")
                )} // Format tampilan DP
                onChange={handleDownPaymentChange}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition"
          >
            Hitung Simulasi Kredit
          </button>

          <p className="mt-8 text-center text-sm text-gray-500">
            Simulasi kredit ini akan dibantu hitung secara personal oleh{" "}
            <strong className="text-gray-700">
              Regi, Sales Resmi Suzuki Yogyakarta
            </strong>
            , untuk mendapatkan penawaran cicilan dan tenor terbaik sesuai
            kebutuhan Anda.
          </p>
        </form>

        {/* FAQ Section (Opsional, tapi bagus untuk SEO) */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pertanyaan Umum Seputar Kredit Mobil Suzuki Jogja
          </h2>
          <div className="mt-10 max-w-2xl mx-auto space-y-6">
            {/* Contoh FAQ Item 1 */}
            <details className="group rounded-lg p-6 bg-white shadow-md">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-800">
                Berapa DP minimum untuk mobil Suzuki di Jogja?
                <span className="ml-4 shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 text-sm">
                DP minimum untuk mobil Suzuki bervariasi tergantung model dan
                promo yang berlaku. Umumnya dimulai dari 10-20% dari harga OTR.
                Untuk informasi lebih akurat, silakan gunakan formulir simulasi
                atau hubungi sales kami.
              </p>
            </details>
            {/* Contoh FAQ Item 2 */}
            <details className="group rounded-lg p-6 bg-white shadow-md">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-800">
                Apakah bisa mendapatkan simulasi kredit tanpa harus datang ke
                dealer?
                <span className="ml-4 shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 text-sm">
                Tentu! Anda bisa mendapatkan simulasi kredit mobil Suzuki secara
                online melalui WhatsApp dengan sales kami, Regi. Cukup isi
                detail mobil dan DP yang Anda inginkan pada formulir di atas,
                lalu klik tombol Hitung Simulasi Kredit.
              </p>
            </details>
            {/* Tambahkan FAQ lain yang relevan */}
          </div>
        </div>
      </div>
    </div>
  );
}
