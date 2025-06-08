import { CHAT_WHATSAPP } from "@/constants/constants";
import Image from 'next/image';


const Hero: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="lg:max-w-lg">
              {/* H1 - Keyword Utama dan Daya Tarik Lokasi */}
              <h1 className="mt-2 text-3xl md:text-3xl lg:text-5xl font-extrabold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center lg:text-left">
                Promo Mobil
                <br />
                Suzuki Jogja Terbaik
                <br />
                Harga & Penawaran Spesial
              </h1>
              <h2 className="mt-6 lg:text-xl sm:text-sm text-gray-600 leading-tight text-center lg:text-left">
                Saya Regi, sales resmi Suzuki Yogyakarta, <br />
                siap bantu Anda temukan mobil impian<br />
                dengan harga terbaik dan
                proses mudah.
              </h2>
              <div className="lg:text-left items-center justify-center lg:items-start mt-10">
                <a
                  href={CHAT_WHATSAPP.KONSULTASI}
                  className="inline-flex items-center justify-center rounded-full px-16 py-4 text-base font-semibold text-white bg-green-600 transition"
                >
                  Hubungi Sekarang
                </a>
                <p className="text-xs lg:hidden md:hidden text-gray-600 mt-4">
                  Hubungi Regi via WhatsApp
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden flex items-center justify-center">
            <Image
              alt="Suzuki Fronx terbaru di Jogja, mobil Suzuki untuk keluarga modern."
              src="/images/fronx.webp"
              fill // Properti `fill` membuat gambar mengisi parent
              priority
              className="object-contain" // Gambar akan skala agar pas di dalam wadah tanpa terpotong
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
