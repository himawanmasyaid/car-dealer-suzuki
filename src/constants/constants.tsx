const BASE_CHAT_URL = "https://wa.me/6281392636737?text=";

export const URLS = {
  HOME_PAGE: "/",
};

export const CHAT_WHATSAPP = {
  KONSULTASI: (() => {
    const message =
      `Halo Mas Regi,%0A` +
      `Saya lihat website JogjaSuzuki.com dan ingin tanya-tanya soal mobil Suzuki, bisa dibantu?`;
    return `${BASE_CHAT_URL}${encodeURIComponent(message)}`;
  })(),
  PROMO: (() => {
    const message =
      `Halo Mas Regi,%0A` +
      `Saya melihat website JogjaSuzuki.com dan ingin tanya-tanya tentang promo mobil Suzuki yang tersedia saat ini.%0A` +
      `Boleh minta info lengkapnya? Terima kasih.`;
    return `${BASE_CHAT_URL}${encodeURIComponent(message)}`;
  })(),

  DETAIL_MOBIL: (carName: string) => {
    const message =
      `Halo Mas Regi,%0A` +
      `Saya lihat website JogjaSuzuki.com dan ingin tanya-tanya soal mobil ${carName}, bisa dibantu?`;
    return `${BASE_CHAT_URL}${encodeURIComponent(message)}`;
  },

  TEST_DRIVE_MOBIL: (carName: string) => {
    const message =
      `Halo Mas Regi,%0A` +
      `Saya melihat website JogjaSuzuki.com dan tertarik untuk melakukan test drive mobil ${carName}.%0A` +
      `Bisakah saya dijadwalkan test drive di area Jogja?`;
    return `${BASE_CHAT_URL}${encodeURIComponent(message)}`;
  },

  // Fungsi baru untuk simulasi kredit yang lebih detail
  SIMULASI_KREDIT: (model: string, type: string, harga: number, dp: number) => {
    // Format harga dan DP ke format mata uang IDR
    const formattedHarga = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(harga);
    const formattedDp = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(dp);
    // Pesan yang akan dikirim ke WhatsApp
    const message =
      `Halo Mas Regi,%0A` +
      `Saya ingin dibantu simulasi kredit mobil Suzuki.%0A%0A` +
      `Berikut detail informasinya:%0A` +
      `Model: ${encodeURIComponent(model)}%0A` +
      `Tipe: ${encodeURIComponent(type)}%0A` +
      `Harga: ${encodeURIComponent(formattedHarga)}%0A` +
      `DP: ${encodeURIComponent(formattedDp)}%0A%0A` +
      `Mohon bantuannya untuk info cicilan dan tenor lebih lanjut.%0A` +
      `Terima kasih.`;

    return `${BASE_CHAT_URL}${message}`;
  },

  KONSULTASI_KREDIT: (carName: string) => {
    const message =
      `Halo Mas Regi,%0A` +
      `Saya melihat website JogjaSuzuki.com dan ingin konsultasi mengenai kredit mobil Suzuki ${carName}.%0A` +
      `Bisa dibantu dengan informasi syarat, proses, dan penawaran terbaiknya?%0A` +
      `Terima kasih.`;
    return `${BASE_CHAT_URL}${encodeURIComponent(message)}`;
  },

  BELI_MOBIL: (carName: string) => {
    const message =
      `Halo Mas Regi,%0A` +
      `Saya tertarik untuk membeli mobil Suzuki ${carName} dan ingin bertanya lebih lanjut.%0A` +
      `Bisakah Anda bantu dengan informasinya? Terima kasih.`;
    return `${BASE_CHAT_URL}${encodeURIComponent(message)}`;
  },
};

export const formatRupiah = (amount: number): string => {
  return `Rp ${amount.toLocaleString("id-ID")}`;
};

export const imageAlt = (name: string): string => {
  return `suzuki-${name}- Dealer Resmi Suzuki Jogja`;
};

export const imageTestimoniAlt = (name: string): string => {
  return `testimoni-suzuki-${name}-- Dealer Resmi Suzuki Jogja`;
};
