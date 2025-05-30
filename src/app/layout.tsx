import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
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
