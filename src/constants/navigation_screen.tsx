export const NavigationScreen = {
  Homepage: "/",
  Pricelist: "/daftarhargamobil",
  CarDetail: (id: string) => `/hargamobil/${id}`,
  Testimoni: "/testimoni",
  SimulasiKredit: "/simulasikredit",
  About: "/tentang",
};

export const navigationLinkList = [
  { label: "Beranda", href: NavigationScreen.Homepage },
  { label: "Harga Mobil", href: NavigationScreen.Pricelist },
  { label: "Testimoni", href: NavigationScreen.Testimoni },
  { label: "Simulasi Kredit", href: NavigationScreen.SimulasiKredit },
  // { label: "Tentang Sales", href: NavigationScreen.About },
];

export const socialMediaLink = [
  // {
  //   name: "Facebook",
  //   href: "https://facebook.com/jogjasuzuki",
  //   icon: "/icons/facebook.svg",
  // },
  {
    name: "Instagram",
    href: "https://www.instagram.com/regi_suzuki/",
    icon: "/icons/instagram.svg",
  },
  // {
  //   name: "YouTube",
  //   href: "https://youtube.com/jogjasuzuki",
  //   icon: "/icons/youtube.svg",
  // },
  // Ganti URL dengan halaman sosial media Anda yang sebenarnya
];
