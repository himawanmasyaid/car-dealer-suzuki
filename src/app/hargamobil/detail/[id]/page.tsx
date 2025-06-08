import { DataPriceList } from "@/data/data_pricelist";
import CarDetailClient from "./car_detail_client";

interface ProductDetailProps {
  params: { id: string };
}

export default async function ProductDetail({ params }: ProductDetailProps) {

  const { id } = await params;
  const car = DataPriceList.find((c) => c.id === id);

  if (!car) {
    return <div>Mobil tidak ditemukan</div>;
  }

  return <CarDetailClient car={car} />;
}