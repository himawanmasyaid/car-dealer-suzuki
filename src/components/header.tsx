"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { NavigationScreen } from "@/constants/navigation_screen";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { URLS } from "@/constants/constants";
import React from "react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = [
    { label: "Beranda", href: NavigationScreen.Homepage },
    { label: "Harga Mobil", href: NavigationScreen.Pricelist },
    { label: "Testimoni", href: NavigationScreen.Testimoni },
    { label: "Simulasi Kredit", href: NavigationScreen.SimulasiKredit },
    { label: "Tentang Sales", href: NavigationScreen.About },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="logo suzuki" src="/suzuki.svg" className="h-6 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-gray-900 uppercase hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href={URLS.CHAT_WHATSAPP}
            className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-700 transition"
          >
            Hubungi Whatsapp
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="logo suzuki" src="/suzuki.svg" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 uppercase"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}{" "}
              </div>
              <div className="py-6">
                <a
                  href={URLS.CHAT_WHATSAPP}
                  className="w-full inline-flex items-center justify-center rounded-full px-5 py-2.5 text-base font-semibold text-white bg-green-600 transition"
                >
                  Hubungi Whatsapp
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
