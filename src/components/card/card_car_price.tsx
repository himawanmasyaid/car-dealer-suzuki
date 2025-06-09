import { trackContactSales, trackViewCarDetail } from "@/constants/analytic";
import { CHAT_WHATSAPP, formatRupiah, imageAlt } from "@/constants/constants";
import { NavigationScreen } from "@/constants/navigation_screen";
import React from "react";

type CarPriceCardProps = {
  id: string;
  name: string;
  price_start: number;
  image: string;
  category: string;
};

const CarPriceCard: React.FC<CarPriceCardProps> = ({
  id,
  name,
  price_start,
  image,
  category,
}) => {
  return (
    <div className="bg-white rounded-xl inset-shadow-2xs shadow-md overflow-hidden p-4 mt-10 flex flex-col">
      <div className="w-full h-64 flex items-end justify-center">
        <img
          src={`images/${image}`}
          alt={imageAlt(name)}
          className="h-48 object-cover"
        />
      </div>

      <h3 className="text-2xl font-bold mt-12">{name}</h3>
      <p className="font-semibold text-sm mb-2">{category}</p>
      <p className="text-lg mb-4">Mulai {formatRupiah(price_start)}</p>
      <div className="flex flex-col gap-2 mt-2">
        <a
          href={NavigationScreen.CarDetail(id)}
          className="inline-flex items-center justify-center font-medium border border-gray-500 text-black rounded-full py-4 px-6 hover:bg-gray-100 transition"
        >
          Lihat detail
        </a>
        <a
          href={CHAT_WHATSAPP.DETAIL_MOBIL(name)}
          className="mt-2 inline-flex items-center justify-center rounded-full py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-400 transition"
        >
          Hubungi sales
        </a>
      </div>
    </div>
  );
};

export default CarPriceCard;
