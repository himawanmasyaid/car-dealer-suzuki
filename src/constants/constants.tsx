const BASE_CHAT_URL = "https://wa.me/6281392636737?text=";

export const URLS = {
  CHAT_WHATSAPP: `${BASE_CHAT_URL}Halo%20Mas%20Regi%2C%0Asaya%20lihat%20website%20JogjaSuzuki.com%20dan%20ingin%20tanya-tanya%20soal%20mobil%20Suzuki%2C%20bisa%20dibantu%3F`,
  CHAT_PROMO:
    "https://wa.me/6281392636737?text=Halo%20Mas%20Regi%2C%0ASaya%20melihat%20website%20JogjaSuzuki.com%20dan%20ingin%20tanya-tanya%20tentang%20promo%20mobil%20Suzuki%20yang%20tersedia%20saat%20ini.%0ABoleh%20minta%20info%20lengkapnya%3F%20Terima%20kasih.",
  CHAT_TEST_DRIVE:
    "https://wa.me/6281392636737?text=Halo%20Mas%20Regi%2C%0ASaya%20melihat%20website%20JogjaSuzuki.com%20dan%20tertarik%20untuk%20melakukan%20test%20drive%20mobil%20Suzuki.%0ABisakah%20saya%20dijadwalkan%20test%20drive%20di%20area%20Jogja%3F",
  HOME_PAGE: "/",
};

export const CHAT_WHATSAPP = {
  WHATSAPP: `${BASE_CHAT_URL}Halo%20Mas%20Regi%2C%0Asaya%20lihat%20website%20JogjaSuzuki.com%20dan%20ingin%20tanya-tanya%20soal%20mobil%20Suzuki%2C%20bisa%20dibantu%3F`,
  PROMO:
    "https://wa.me/6281392636737?text=Halo%20Mas%20Regi%2C%0ASaya%20melihat%20website%20JogjaSuzuki.com%20dan%20ingin%20tanya-tanya%20tentang%20promo%20mobil%20Suzuki%20yang%20tersedia%20saat%20ini.%0ABoleh%20minta%20info%20lengkapnya%3F%20Terima%20kasih.",
  DETAIL_MOBIL: (carName: string) =>
    `${BASE_CHAT_URL}Halo%20Mas%20Regi%2C%0Asaya%20lihat%20website%20JogjaSuzuki.com%20dan%20ingin%20tanya-tanya%20soal%20mobil%20${encodeURIComponent(
      carName
    )}%2C%20bisa%20dibantu%3F`,
  TEST_DRIVE_MOBIL: (carName: string) =>
    `${BASE_CHAT_URL}Halo%20Mas%20Regi%2C%0ASaya%20melihat%20website%20JogjaSuzuki.com%20dan%20tertarik%20untuk%20melakukan%20test%20drive%20mobil%20${encodeURIComponent(
      carName
    )}.%0ABisakah%20saya%20dijadwalkan%20test%20drive%20di%20area%20Jogja%3F`,

  SIMULASI_KREDIT_MOBIL: (carName: string) =>
    `${BASE_CHAT_URL}Halo%20Mas%20Regi%2C%0Asaya%20lihat%20website%20JogjaSuzuki.com%20dan%20ingin%20tanya-tanya%20soal%20mobil%20${encodeURIComponent(
      carName
    )}%2C%20bisa%20dibantu%3F`,

  BELI_MOBIL: (carName: string) =>
    `${BASE_CHAT_URL}Halo%20Mas%20Regi%2C%0Asaya%20lihat%20website%20JogjaSuzuki.com%20dan%20ingin%20tanya-tanya%20soal%20mobil%20${encodeURIComponent(
      carName
    )}%2C%20bisa%20dibantu%3F`,
};


export const formatRupiah = (amount: number): string => {
  return `Rp ${amount.toLocaleString("id-ID")}`;
};

export const imageAlt = (name: string): string => {
  return `suzuki-${name}-jogja.jpg`;
};