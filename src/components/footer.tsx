import {
  navigationLinkList,
  socialMediaLink,
} from "@/constants/navigation_screen";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Ambil tahun saat ini secara dinamis

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kolom 1: Logo & Deskripsi Singkat */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="logo suzuki"
                  src="/suzuki.svg"
                  className="h-6 w-auto"
                />
              </a>
            </div> */}
            <p className="text-sm leading-relaxed">
              Dealer Resmi Mobil Suzuki di Yogyakarta. Melayani penjualan mobil
              baru, promo menarik, dan layanan purna jual profesional.
            </p>
          </div>

          {/* Kolom 2: Kontak Kami & Jam Operasional (NAP Info) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Hubungi Kami
            </h3>
            <p className="text-sm">
              <strong>Dealer Resmi Suzuki Yogyakarta</strong>
            </p>
            <p className="text-sm">Jl. Magelang No. 123, Sinduadi, Mlati,</p>
            <p className="text-sm">Sleman, Yogyakarta 55284</p>
            {/* <p className="text-sm">
              WhatsApp:{" "}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                +62 812-3456-7890 (Regi Sales Resmi)
              </a>
            </p> */}
            <p className="text-sm mt-4">
              <strong>Jam Buka:</strong>
              <br />
              Senin - Jumat: 08.00 - 17.00 WIB
              <br />
              Sabtu: 09.00 - 14.00 WIB
              <br />
              Minggu: Tutup
            </p>
          </div>

          {/* Navigasi Cepat */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2">
              {navigationLinkList.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
            <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Social Media
            </h3>
            <ul className="space-y-2">
              {socialMediaLink.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bawah: Hak Cipta & Kebijakan */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
          <p>© {currentYear} Jogja Suzuki. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );

  // return (
  //   <footer className="bg-gray-900 text-white py-8">
  //     <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
  //       &copy; 2025 Regi Sales Suzuki Jogja . All rights reserved.
  //     </div>
  //   </footer>
  // );
};

export default Footer;
