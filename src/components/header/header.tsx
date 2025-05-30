"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { URLS } from "@/constants/constants";

const Header: React.FC = () => {
  const [isNavBarOpen, setNavbarOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Model Mobil", href: "#model" },
    { label: "Tentang", href: "#tentang" },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/suzuki.svg" alt="Logo Suzuki" className="h-6 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href={URLS.CHAT_WHATSAPP}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition"
          >
            WhatsApp Sekarang
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setNavbarOpen(!isNavBarOpen)}
          className="md:hidden"
        >
          {isNavBarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isNavBarOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-700 font-medium py-2 border-b"
              onClick={() => setNavbarOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={URLS.CHAT_WHATSAPP}
            className="block w-full bg-green-500 hover:bg-green-600 text-white text-center font-medium py-3 rounded transition"
            onClick={() => setNavbarOpen(false)}
          >
            WhatsApp Sekarang
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
