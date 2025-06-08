import { DataPriceList } from "@/data/data_pricelist"; // Asumsi ini adalah sumber data mobil Anda
import type { Metadata } from 'next';
import Link from 'next/link';

// Import the Client Component
import ProductDetailsClient from './product_details_client'; // Path disesuaikan jika Anda menempatkan di folder yang sama

// --- Interfaces for Type Safety ---
// Pastikan interface ini sesuai dengan struktur data Anda
interface CarVariant {
  type: string;
  price: number;
  // ... properti lain jika ada (misal: color, engine)
}

interface CarData {
  id: string;
  name: string;
  image: string; // Asumsi ini adalah string path gambar
  category: string; // Misal: SUV, MPV
  price_start: number; // Harga awal jika tidak ada varian
  variants: CarVariant[];
  // ... properti lain dari objek mobil Anda
}

interface ProductPageParams {
  id: string;
}

// --- generateMetadata Function (Server-side) ---
// Ini akan dijalankan di server untuk SEO
export async function generateMetadata({ params }: { params: ProductPageParams }): Promise<Metadata> {
  const car: CarData | undefined = DataPriceList.find((c: CarData) => c.id === params.id);

  if (!car) {
    return {
      title: "Mobil Tidak Ditemukan | Jogja Suzuki",
      description: "Halaman mobil yang Anda cari tidak tersedia di Dealer Resmi Suzuki Jogja.",
    };
  }

  // Ambil harga dari varian pertama atau harga_start jika tidak ada varian
  const defaultVariantPrice = car.variants.length > 0 ? car.variants[0].price : car.price_start;
  const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(defaultVariantPrice);
  const currentYear = new Date().getFullYear();

  return {
    title: `Harga ${car.name} ${car.variants.length > 0 ? car.variants[0].type + ' ' : ''}Terbaru di Jogja ${currentYear} | Promo & Spesifikasi`,
    description: `Dapatkan informasi harga terbaru, spesifikasi lengkap, dan promo spesial untuk mobil Suzuki ${car.name} di Dealer Resmi Jogja Suzuki. Harga mulai dari ${formattedPrice}. Tersedia berbagai tipe dan pilihan warna. Ajukan simulasi kredit atau pesan langsung via WhatsApp.`,
    keywords: `harga suzuki ${car.name.toLowerCase()} jogja, jual suzuki ${car.name.toLowerCase()} yogyakarta, promo suzuki ${car.name.toLowerCase()} jogja, spesifikasi ${car.name.toLowerCase()} suzuki, cicilan ${car.name.toLowerCase()} jogja, dealer suzuki jogja ${car.name.toLowerCase()}`,
    openGraph: {
      title: `Harga ${car.name} Terbaru di Jogja ${currentYear} | Jogja Suzuki`,
      description: `Info lengkap harga, spesifikasi, dan promo Suzuki ${car.name} di Yogyakarta.`,
      url: `https://jogjasuzuki.com/harga-mobil/detail/${car.id}`, // Sesuaikan URL dengan struktur path Anda
      images: [`/images/${car.image}`], // Asumsi gambar ada di folder public/images/
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Harga ${car.name} Terbaru di Jogja ${currentYear} | Jogja Suzuki`,
      description: `Info lengkap harga, spesifikasi, dan promo Suzuki ${car.name} di Yogyakarta.`,
      images: [`/images/${car.image}`],
    }
  };
}

// --- ProductOverview Server Component ---
// Komponen ini mengambil data dan meneruskannya ke Client Component
export default function ProductOverview({ params }: { params: ProductPageParams }) {
  const car: CarData | undefined = DataPriceList.find((c: CarData) => c.id === params.id);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
        <div className="text-center bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Mobil Tidak Ditemukan</h1>
          <p className="text-lg text-gray-600 mb-6">Mohon maaf, data mobil yang Anda cari tidak tersedia atau sudah tidak dipasarkan.</p>
          <Link
            href="/hargamobil"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
          >
            Lihat Semua Daftar Harga Mobil Suzuki
          </Link>
        </div>
      </div>
    );
  }
  return (
    <ProductDetailsClient
      carData={car}
      initialSelectedVariant={car.variants.length > 0 ? car.variants[0] : null}
    />
  );
}