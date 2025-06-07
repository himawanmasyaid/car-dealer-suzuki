import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Plus_Jakarta_Sans } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});


export const metadata: Metadata = {
  title:
    "Dealer Suzuki Jogja Resmi | Promo Harga Mobil Suzuki Yogyakarta Terbaru & Terbaik",
  description:
    "Cari mobil Suzuki di Jogja? Dapatkan harga, promo, dan kredit terbaik dari dealer resmi Suzuki Yogyakarta. Tersedia Suzuki Ertiga, XL7, Fronx dan model lainnya. Hubungi Regi, sales terpercaya untuk test drive sekarang!",
  icons: {
    icon: "/favicon.ico",
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
        <main className="w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
