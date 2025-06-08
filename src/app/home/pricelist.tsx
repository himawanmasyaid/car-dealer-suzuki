import React from "react";
import CarPriceCard from "@/components/card/card_car_price";
import { cars_price_starter } from "@/data/cars";

const PriceList: React.FC = () => {
  return (
    <div className="bg-white-50 py-24 px-2">
      <h2 className="uppercase text-center text-base font-semibold text-blue-900">
        DAFTAR HARGA MOBIL SUZUKI JOGJA
      </h2>
      <h3 className="mx-auto mt-6 text-center text-3xl md:text-3xl lg:text-5xl font-bold tracking-tight text-balance text-gray-950 sm:text-5xl">
        Dapatkan Harga Promo
        <br />
        Terbaik Suzuki di Yogyakarta
      </h3>
      <h4 className="mt-6 text-base md:text-xl lg:text-xl tracking-tight text-center max-lg:text-center text-gray-400">
        Temukan penawaran spesial untuk mobil keluarga, SUV tangguh, hingga
        mobil niaga Suzuki di Jogja.
      </h4>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-2">
        {cars_price_starter.map((car) => (
          <CarPriceCard
            key={car.id}
            id={car.id}
            name={car.name}
            price_start={car.price_start}
            image={car.image}
            category={car.category}
          />
        ))}
      </div>
    </div>
  );
};

export default PriceList;
