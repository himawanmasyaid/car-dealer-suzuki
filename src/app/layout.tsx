import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Dealer Suzuki Jogja Resmi | Promo Harga Mobil Suzuki Yogyakarta Terbaru & Terbaik",
    template: "%s | Jogja Suzuki Resmi", // Ini penting untuk judul dinamis
  },
  description:
    "Cari mobil Suzuki di Jogja? Dapatkan harga, promo, dan kredit terbaik dari dealer resmi Suzuki Yogyakarta. Tersedia Suzuki Ertiga, XL7, Fronx dan model lainnya. Hubungi Regi, sales terpercaya untuk test drive sekarang!",
  keywords: [
    "dealer suzuki jogja",
    "harga mobil suzuki yogyakarta",
    "promo suzuki jogja",
    "kredit suzuki jogja",
    "simulasi kredit suzuki jogja",
    "dp murah suzuki jogja",
    "cicilan ringan suzuki jogja",
    "suzuki ertiga jogja",
    "suzuki xl7 jogja",
    "suzuki jimny jogja",
    "suzuki grand vitara jogja",
    "suzuki fronx jogja",
    "suzuki carry jogja", // Tambahkan model populer lainnya jika relevan
    "sales suzuki jogja",
    "marketing suzuki jogja",
    "test drive suzuki jogja",
    "dealer suzuki resmi jogja",
    "showroom suzuki yogyakarta",
    "mobil baru suzuki jogja",
    "beli suzuki jogja",
    "penawaran suzuki jogja",
    "diskon suzuki jogja",
    "update harga suzuki jogja",
    "info suzuki jogja",
    "pusat suzuki jogja",
  ].join(", "),

  // --- Open Graph (Untuk Sharing di Media Sosial) ---
  openGraph: {
    title:
      "Dealer Suzuki Jogja Resmi | Promo Harga Mobil Suzuki Yogyakarta Terbaru & Terbaik",
    description:
      "Cari mobil Suzuki di Jogja? Dapatkan harga, promo, dan kredit terbaik dari dealer resmi Suzuki Yogyakarta. Tersedia Suzuki Ertiga, XL7, Fronx dan model lainnya. Hubungi Regi, sales terpercaya untuk test drive sekarang!",
    url: "https://jogjasuzuki.com",
    siteName: "Jogja Suzuki Resmi",
    images: [
      {
        url: "https://jogjasuzuki.com/og-image.jpg", // Ganti dengan URL gambar OG Anda (rekomendasi 1200x630px)
        width: 1200,
        height: 630,
        alt: "Dealer Resmi Suzuki Jogja",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://jogjasuzuki.com", // URL kanonikal utama
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <body className="w-full">{children}</body>
        <GoogleAnalytics gaId="G-YBTYTLTPGR" />
        <Footer />
      </body>
    </html>
  );
}
