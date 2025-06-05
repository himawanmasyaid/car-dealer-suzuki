"use client";

import Image from "next/image";
import React from "react";

const Product: React.FC = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Daftar Mobil</h2>
      <p className="text-center mb-8">
        Explore our wide range of vehicles tailored to your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={`/car${id}.jpg`}
              alt={`Car ${id}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Car Model {id}</h3>
              <p className="text-gray-600">Description of Car Model {id}.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;