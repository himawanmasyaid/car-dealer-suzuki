import React from "react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <section className="flex flex-col items-center text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Car Sales</h1>
        <p className="text-lg mb-6">
          Discover the best cars at unbeatable prices. Your dream car awaits!
        </p>
        <a
          href="https://wa.me/yourwhatsappnumber"
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
        >
          Contact via WhatsApp
        </a>
        <img
          src="/your-photo.jpg"
          alt="Sales Car"
          className="mt-8 rounded-full h-32 w-32 object-cover"
        />
      </section>

      {/* Daftar Mobil Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Daftar Mobil</h2>
        <p className="text-center mb-8">
          Explore our wide range of vehicles tailored to your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example Car Item */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/car1.jpg"
              alt="Car 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Car Model 1</h3>
              <p className="text-gray-600">Description of Car Model 1.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/car2.jpg"
              alt="Car 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Car Model 2</h3>
              <p className="text-gray-600">Description of Car Model 2.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/car3.jpg"
              alt="Car 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Car Model 3</h3>
              <p className="text-gray-600">Description of Car Model 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Testimoni</h2>
        <p className="text-center mb-8">
          Hear what our satisfied customers have to say!
        </p>
        <div className="flex justify-center space-x-8">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="font-semibold">Customer 1</p>
            <p className="text-gray-600">Great service and amazing cars!</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="font-semibold">Customer 2</p>
            <p className="text-gray-600">I love my new car, thank you!</p>
          </div>
        </div>
      </section>

      {/* End Call Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Drive Your Dream Car?
        </h2>
        <p className="mb-6">
          Contact us today and let us help you find the perfect vehicle!
        </p>
        <a
          href="https://wa.me/yourwhatsappnumber"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

// export default function HomeView: React.FC = () => {
//   return (

//   );
// };
