export default function CardNewCar() {
     return (
       <div className="max-w-sm mx-auto bg-white inset-shadow-2xs rounded-xl shadow-md overflow-hidden md:max-w-2xl">
         <div className="md:flex flex-col">
           <div className="md:shrink-0">
             <img className="mt-16 h-48 w-full object-cover md:h-full md:w-48" src="images/fronx.webp" alt="iPad Air M3" />
           </div>
           <div className="px-4 py-8">
             <h2 className="text-orange-500 text-xs font-bold uppercase tracking-wide">NEW</h2>
             <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">iPad Air M3</h1>
             <p className="mt-2 text-gray-500">Kecepatan super.</p>
             <p className="mt-2 text-gray-900 text-lg font-bold">Mulai Rp11.999.000.</p>
           </div>
         </div>
       </div>
     )
   }
   