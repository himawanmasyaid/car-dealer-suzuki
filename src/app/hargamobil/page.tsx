import React from "react";
import CarPriceCard from "@/components/card/card_car_price";
import { cars_price_starter } from "@/data/cars";

const HargaMobilPage: React.FC = () => {
  {
    return (
      <div className="bg-white-50 sm:py-32 px-2">
        <div className="mx-auto max-w-2xl px-2 lg:max-w-7xl lg:px-8"></div>

        <h1 className="uppercase text-center text-base font-semibold text-blue-900">
          Daftar Harga Mobil Suzuki Terbaru di Jogja 2025
        </h1>
        <h2 className="mx-auto mt-4 text-center text-5xl font-bold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Temukan mobil Suzuki impian Anda
        </h2>
        <h3 className="mx-auto mt-6 text-xl tracking-tight text-center max-w-3xl text-gray-400">
          Mulai dari mobil keluarga yang nyaman hingga SUV tangguh untuk
          petualangan. Dapatkan penawaran harga terbaik dan promo spesial hanya
          di Jogja Suzuki.
        </h3>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-2">
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
  }
};

export default HargaMobilPage;
