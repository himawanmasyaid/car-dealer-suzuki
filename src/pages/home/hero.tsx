import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen bg-gradient-to-r from-pink-100 to-sky-100">
      <div className="flex flex-1 items-center justify-center p-8 text-center md:text-left">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Cari Mobil Suzuki Terbaik Buat Kamu?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Saya Regi, siap bantu kamu pilih dan dapatkan mobil impianmu dengan harga terbaik!
          </p>
          <a
            href="https://wa.me/6281392636737?text=Halo%20Mas%20Regi%2C%0ASaya%20lihat%20website%20JogjaSuzuki.com%20dan%20ingin%20tanya-tanya%20soal%20mobil%20Suzuki%2C%20bisa%20dibantu%3F"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center p-6">
        <Image
          src="/images/regi.png"
          alt="Mobil Suzuki"
          className="w-full max-w-md md:max-w-lg object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
