import { CHAT_WHATSAPP } from "@/constants/constants";

const Cta : React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Butuh Info Harga & Promo Mobil Suzuki di Jogja?
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">
              Jangan lewatkan penawaran terbatas! Dapatkan update harga mobil Suzuki terbaru dan promo terbaik langsung dari Regi, sales resmi Suzuki Yogyakarta.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href={CHAT_WHATSAPP.KONSULTASI}
                  className="inline-flex items-center justify-center rounded-full px-16 py-4 text-base font-semibold text-white bg-green-600 transition"
              >
                Konsultasi & Dapatkan Promo Sekarang!
              </a>
            </div>
          </div>
          {/* <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="Regi sales suzuki jogja"
              src="/images/regi.png"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div> */}

                    <div className="relative mt-16 lg:mt-8 flex justify-center items-center lg:justify-end lg:items-center">
            <img
              src="/images/regi.png" // Pastikan path ini benar
              alt="Regi, Sales Resmi Suzuki Yogyakarta, siap bantu cari mobil Suzuki Anda."
              width={400} // Contoh ukuran yang lebih masuk akal untuk foto portrait orang (sesuaikan!)
              height={500} // Contoh ukuran yang lebih masuk akal (sesuaikan dengan rasio asli foto Regi)
              className="w-auto h-auto max-w-none rounded-md bg-white/5 ring-1 ring-white/10" // Hapus w-228, biarkan ukuran diatur oleh width/height dan max-w-none
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Cta;
