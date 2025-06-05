import React from "react";
// import { cars_price_starter } from "@/data/cars";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import CarPriceStart from "@/components/car_price_start";

const NewProducts: React.FC = () => {
  // Slick settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Show 3 items at a time
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768, // For medium screens
//         settings: {
//           slidesToShow: 2, // Show 2 items on medium screens
//         },
//       },
//       {
//         breakpoint: 480, // For small screens
//         settings: {
//           slidesToShow: 1, // Show 1 item on small screens
//         },
//       },
//     ],
//   };

  return (
    <section id="pricelist" className="py-16 px-4 md:px-8">
      <div className="bg-gray-50 py-24 sm:py-32">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          Daftar Harga
        </h2>
        <p className="mx-auto mt-2 text-center text-5xl font-bold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Temukan suzuki terbaikmu
        </p>
        <p className="mt-6 text-xl tracking-tight text-center max-lg:text-center text-gray-400">
          Dari mobil keluarga yang nyaman sampai mobil tangguh buat petualangan
        </p>
        <div className="mt-20 max-w-6xl mx-auto">
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
