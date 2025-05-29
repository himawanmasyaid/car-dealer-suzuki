import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jogja Suzuki | Promo & Penjualan Mobil Suzuki Yogyakarta – Regi Sales Resmi",
  description: "Temukan mobil Suzuki impian Anda bersama Regi, sales resmi Suzuki Yogyakarta. Dapatkan harga terbaik, promo terbaru, cashback, dan konsultasi kredit mobil terpercaya di Jogja dan sekitarnya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
