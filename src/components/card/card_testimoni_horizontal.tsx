import { imageTestimoniAlt } from "@/constants/constants";
import { TestimoniModel } from "@/data/data_testimoni";
import React from "react";

type TestimoniHorizontalCardProps = {
  testimoni: TestimoniModel;
};

const TestimoniHorizontalCard: React.FC<TestimoniHorizontalCardProps> = ({
  testimoni,
}) => {
  return (
    <div className="w-full bg-white rounded-xl inset-shadow-2xs shadow-md overflow-hidden p-4 mt-10 flex flex-col md:flex-row">
      <div className="flex-shrink-0 h-full lg:w-64 md:w-64 overflow-hidden">
        <img
          src={`images/${testimoni.image}`}
          alt={imageTestimoniAlt(testimoni.name)}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center p-4">
        <h5 className="text-base">{testimoni.testimoni}</h5>
        <p className="mt-4 font-bold text-lg text-gray-500">{testimoni.name}</p>
        <p className="font-semibold text-lg text-gray-500">{testimoni.address}</p>
      </div>
    </div>
  );
};

export default TestimoniHorizontalCard;
