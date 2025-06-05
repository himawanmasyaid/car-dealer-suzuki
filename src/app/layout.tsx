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
    "Jogja Suzuki | Promo & Penjualan Mobil Suzuki Yogyakarta – Regi Sales Resmi",
  description:
    "Temukan mobil Suzuki impian Anda bersama Regi, sales resmi Suzuki Yogyakarta. Dapatkan harga terbaik, promo terbaru, cashback, dan konsultasi kredit mobil terpercaya di Jogja dan sekitarnya.",
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
