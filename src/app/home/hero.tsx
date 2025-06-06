import { URLS } from "@/constants/constants";

const Hero: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              {/* H1 - Keyword Utama dan Daya Tarik Lokasi */}
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Promo Mobil<br/>Suzuki Jogja Terbaik<br/>
                Harga & Penawaran Spesial
              </h1>
              <h2 className="mt-6 text-lg/8 text-gray-600">
                Saya Regi, sales resmi Suzuki Yogyakarta, siap bantu Anda temukan
                mobil impian dengan harga terbaik dan proses mudah.
              </h2>
              <a
                href={URLS.CHAT_WHATSAPP}
                className="mt-6 inline-flex items-center justify-center rounded-full px-16 py-4 text-base font-semibold text-white bg-green-600 transition"
              >
                Hubungi Whatsapp
              </a>
            </div>
          </div>
          <img
            alt="Suzuki Fronx terbaru di Jogja, mobil Suzuki untuk keluarga modern."
            src="images/fronx.webp"
            // className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
