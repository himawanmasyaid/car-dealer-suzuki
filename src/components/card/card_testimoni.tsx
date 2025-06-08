import { imageTestimoniAlt } from "@/constants/constants";
import { TestimoniModel } from "@/data/data_testimoni";
import React from "react";

type TestimoniCardProps = {
  testimoni: TestimoniModel;
};

const TestimoniCard: React.FC<TestimoniCardProps> = ({ testimoni }) => {
  return (
    // <div className="bg-white rounded-xl inset-shadow-2xs shadow-md overflow-hidden p-4 mt-10 flex flex-col max-w-[256px]">
    <div className="bg-white rounded-xl inset-shadow-2xs shadow-md overflow-hidden p-4 mt-10 flex flex-col">
      <div className="h-72 flex items-center justify-center overflow-hidden">
        <img
          src={`images/${testimoni.image}`}
          alt={imageTestimoniAlt(testimoni.name)}
          className="w-full h-full object-cover"
        />
      </div>
      <h5
        className="text-base mt-12"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 7,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {testimoni.testimoni}{" "}
      </h5>
      <p className="mt-6 font-bold text-lg text-gray-500">{testimoni.name}</p>
      <p className="font-semibold text-lg text-gray-500">{testimoni.address}</p>
    </div>
  );
};

export default TestimoniCard;
