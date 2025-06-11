const BASE_CHAT_URL = "https://wa.me/6281392636737?text=";

export const URLS = {
  HOME_PAGE: "/",
};

export const CHAT_WHATSAPP = {
  KONSULTASI: (() => {
    const message = `Halo Mas Regi
    Saya lihat website jogjasuzuki.com dan ingin tanya-tanya soal mobil Suzuki, bisa dibantu?`;
    return `${BASE_CHAT_URL}${encodeURIComponent(message)}`;
  })(),
  PROMO: (() => {
    const message = `Halo Mas Regi,
      Saya melihat website jogjasuzuki.com dan ingin tanya-tanya tentang promo mobil Suzuki yang tersedia saat ini
      Boleh minta info lengkapnya? Terima kasih.`;
    return `${BASE_CHAT_URL}${encodeURIComponent(message)}`;
  })(),

  DETAIL_MOBIL: (carName: string) => {
    const message = `Halo Mas Regi
      Saya lihat website jogjasuzuki.com dan ingin tanya-tanya soal mobil ${carName}, bisa dibantu?`;
    return `${BASE_CHAT_URL}${encodeURIComponent(message)}`;
  },

  TEST_DRIVE_MOBIL: (carName: string) => {
    const message = `Halo Mas Regi
      Saya melihat website jogjasuzuki.com dan tertarik untuk melakukan test drive mobil ${carName}
      Bisakah saya dijadwalkan test drive di area Jogja?`;
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
    const message = `Halo Mas Regi,
      Saya ingin dibantu simulasi kredit mobil Suzuki
      Berikut detail informasinya:
      Model: ${encodeURIComponent(model)}
      Tipe: ${encodeURIComponent(type)}
      Harga: ${encodeURIComponent(formattedHarga)}
      DP: ${encodeURIComponent(formattedDp)}
      Mohon bantuannya untuk info cicilan dan tenor lebih lanjut.
      Terima kasih.`;

    return `${BASE_CHAT_URL}${message}`;
  },

  KONSULTASI_KREDIT: (carName: string, type: string, region: string, price: number) => {
    const message = `Halo Mas Regi\n
Saya melihat website jogjasuzuki.com dan ingin konsultasi mengenai kredit mobil Suzuki ${carName} varian ${type} untuk wilayah ${region}. Saya lihat harganya sekitar ${formatRupiah(price)}.
      Bisa dibantu dengan informasi syarat, proses, dan penawaran terbaiknya?
      Terima kasih.`;
    return `${BASE_CHAT_URL}${encodeURIComponent(message)}`;
  },

  BELI_MOBIL: (carName: string, type: string, region: string, price: number) => {
  const message = `Halo Mas Regi,\nSaya melihat website jogjasuzuki.com\nSaya tertarik dengan mobil Suzuki ${carName} varian ${type} untuk wilayah ${region}. Saya lihat harganya sekitar ${formatRupiah(price)}.
Bolehkah saya mendapatkan informasi lebih lanjut mengenai promo, stok, dan proses pembeliannya?
Terima kasih 🙏`;
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
  return `testimoni-suzuki-${name}- Dealer Resmi Suzuki Jogja`;
};
