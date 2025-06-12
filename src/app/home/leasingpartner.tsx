import React from "react";

const leasingPartners = [
  {
    name: "Suzuki Finance Indonesia",
    image: "/images/suzuki_finance_indonesia_cover.jpeg",
  },
  { name: "BCA Finance", image: "/images/bca-finance.png" },
  { name: "Mandiri Tunas Finance", image: "/images/mandiri-tunas-finance.jpg" },
  { name: "Indomobil Finance", image: "/images/indomobil-finance.jpeg" },
  { name: "Adira Finance", image: "/images/logo-adira-finance.png" },
  { name: "OTO Finance", image: "/images/oto-finance.jpeg" },
];

const LeasingPartner: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl py-24 px-4">
      <div className="mb-14 text-center">
        <h3 className="mx-auto mt-6 text-center text-3xl md:text-3xl lg:text-5xl font-bold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Partner Leasing Terpercaya
        </h3>
        <h4 className="mt-6 text-base md:text-xl lg:text-xl tracking-tight text-center max-lg:text-center text-gray-400">
          Dapatkan kemudahan pembiayaan kendaraan Anda
          <br />
          melalui berbagai pilihan leasing terpercaya yang telah bekerja sama
          dengan kami.
        </h4>
      </div>

      <div className="mt-24 px-4 grid grid-cols-2 gap-12 justify-center items-center md:grid-cols-3 xl:grid-cols-6">
        {leasingPartners.map((partner, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={partner.image}
              alt={partner.name}
              className="h-16 object-contain transition duration-300"
              title={partner.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeasingPartner;
