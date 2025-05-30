import React from "react";
import Image from "next/image";

type CarPriceStartProps = {
  name: string;
  price_start: number;
  image: string;
  category: string;
};

const CarPriceStart: React.FC<CarPriceStartProps> = ({
  name,
  price_start,
  image,
  category,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img
        src={`images/${image}`}
        alt={name}
        className="w-full h-48 object-cover rounded"
      />

      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-gray-500 text-sm mb-2">{category}</p>
      <p className="text-lg font-bold mb-4">
        Mulai Rp {price_start.toLocaleString("id-ID")}
      </p>
      <div className="mt-auto flex flex-col gap-2">
        <button className="border border-gray-500 text-gray-700 rounded px-4 py-2 hover:bg-gray-100 transition">
          Lihat Detail
        </button>
        <a
          href={`https://wa.me/6281392636737?text=Halo%20Mas%20Regi%2C%20saya%20tertarik%20dengan%20mobil%20${name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white text-center rounded px-4 py-2 hover:bg-green-700 transition"
        >
          Whatsapp Sales
        </a>
      </div>
    </div>
  );
};

export default CarPriceStart;
