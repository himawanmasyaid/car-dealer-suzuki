"use client";
import { useState } from "react";

const HeaderV2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { name: "Beranda", href: "#home" },
    { name: "Harga", href: "#model" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
              <a>
                <img
                  className="h-8 w-auto"
                  src="/suzuki.svg"
                  alt="Logo Suzuki"
                />
              </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:space-x-8 md:items-center">
            {navigation.map((item) => (
              <div key={item.name}>
                <a className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition">
                  {item.name}
                </a>
              </div>
            ))}

            <a
              href="#"
              className="ml-6 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              WhatsApp Sekarang
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white transition"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            {navigation.map((item) => (
              <div key={item.name}>
                <a
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
                >
                  {item.name}
                </a>
              </div>
            ))}

            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="block mt-1 px-3 py-2 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 text-center transition"
            >
              WhatsApp Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderV2;
