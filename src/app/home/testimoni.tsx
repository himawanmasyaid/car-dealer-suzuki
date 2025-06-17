"use client";

import TestimoniCard from "@/components/card/card_testimoni";
import { DataTestimoniList } from "@/data/data_testimoni";
import React from "react";

const Testimoni: React.FC = () => {
  return (
    <div className="bg-white-50 py-24 px-2">
      <div className="mx-auto max-w-2xl px-2 lg:max-w-7xl lg:px-8"></div>

      <h2 className="uppercase text-center text-base font-semibold text-blue-900">
        Testimoni Pelanggan
      </h2>
      <h3 className="mx-auto mt-6 text-center font-bold text-3xl md:text-3xl lg:text-5xl tracking-tight text-balance text-gray-950 sm:text-5xl">
        Senyum Puas Serah Terima <br/> 
        Mobil Suzuki Jogja
      </h3>
      <h4 className="mt-6 text-base md:text-xl lg:text-xl tracking-tight text-center max-lg:text-center text-gray-400">
        Lihat cerita kebahagiaan para pelanggan kami <br/>
        setelah mendapatkan mobil Suzuki impian mereka. <br/>
        Kami siap membantu Anda juga
      </h4>

      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center">
        {DataTestimoniList.map((testimoni) => (
          <TestimoniCard
            key={testimoni.name}
            testimoni={testimoni}
          />
        ))}
      </div>
    </div>
  );

};

export default Testimoni;
