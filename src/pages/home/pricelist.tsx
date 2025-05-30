import React from "react";
import CarPriceStart from "@/components/car_price_start";
import { cars_price_starter } from "@/data/cars";

const PriceList: React.FC = () => {
  return (
    <section id="pricelist" className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-4">Daftar Harga Mobil</h2>
      <p className="text-center mb-8 text-gray-600">Temukan mobil Suzuki impian Anda dengan harga terbaik.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cars_price_starter.map((car) => (
          <CarPriceStart
            key={car.name}
            name={car.name}
            price_start={car.price_start}
            image={car.image}
            category={car.category}
          />
        ))}
      </div>
    </section>
  );
};

export default PriceList;