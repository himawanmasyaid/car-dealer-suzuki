import TestimoniHorizontalCard from "@/components/card/card_testimoni_horizontal";
import { DataTestimoniList } from "@/data/data_testimoni";

export default function TestimoniPage() {
  return (
    <div className="bg-white-50 py-18 mb-18 px-2">
      <div className="mx-auto max-w-2xl px-2 lg:max-w-7xl lg:px-8"></div>

      <h1 className="uppercase text-center text-base font-semibold text-blue-900">
        Testimoni Pelanggan
      </h1>
      <h2 className="mx-auto mt-6 text-center text-3xl md:text-3xl lg:text-5xl font-bold tracking-tight text-balance text-gray-950 sm:text-5xl">
        Senyum Puas Serah Terima <br />
        Mobil Suzuki Jogja
      </h2>
      <h3 className="mt-6 text-base md:text-xl lg:text-xl tracking-tight text-center max-lg:text-center text-gray-400">
        Lihat cerita kebahagiaan para pelanggan kami <br />
        setelah mendapatkan mobil Suzuki impian mereka. <br />
        Kami siap membantu Anda juga
      </h3>

      <div className="mt-20 gap-8 max-w-6xl mx-auto px-2">
        {DataTestimoniList.map((testimoni) => (
          <TestimoniHorizontalCard
            key={testimoni.name} // Pastikan untuk memberikan key yang unik
            testimoni={testimoni}
          />
        ))}
      </div>
    </div>
  );
}
