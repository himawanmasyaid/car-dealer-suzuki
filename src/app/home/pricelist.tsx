import React from "react";
import CarPriceCard from "@/components/card/card_car_price";
import { cars_price_starter } from "@/data/cars";

const PriceList: React.FC = () => {
  return (
      <div className="bg-white-50 sm:py-32 px-2">
        <div className="mx-auto max-w-2xl px-2 lg:max-w-7xl lg:px-8"></div>

        <h2 className="text-center text-base font-semibold text-blue-900">
          DAFTAR HARGA
        </h2>
        <p className="mx-auto mt-2 text-center text-5xl font-bold tracking-tight text-balance text-gray-950 sm:text-5xl">
            Temukan suzuki terbaikmu
        </p>
        <p className="mt-6 text-xl tracking-tight text-center max-lg:text-center text-gray-400">
          Dari mobil keluarga yang nyaman sampai mobil tangguh buat petualangan
        </p>

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
};

export default PriceList;