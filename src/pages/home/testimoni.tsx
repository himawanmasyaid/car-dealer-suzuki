"use client";

import React from "react";

const Testimoni: React.FC = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Testimoni</h2>
      <p className="text-center mb-8">
        Hear what our satisfied customers have to say!
      </p>
      <div className="flex justify-center space-x-8 flex-wrap gap-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md w-72">
          <p className="font-semibold">Customer 1</p>
          <p className="text-gray-600">Great service and amazing cars!</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md w-72">
          <p className="font-semibold">Customer 2</p>
          <p className="text-gray-600">I love my new car, thank you!</p>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;