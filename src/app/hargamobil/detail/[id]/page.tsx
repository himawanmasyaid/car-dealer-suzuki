import { DataPriceList } from "@/data/data_pricelist";
import CarDetailClient from "./car_detail_client";

export default async function ProductDetail(props: {
  params: Promise<{ id: string }>;
}) {

  const params = await props.params;
  const car = DataPriceList.find((c) => c.id === params.id);

  if (!car) {
    return <div>Mobil tidak ditemukan</div>;
  }

  return <CarDetailClient car={car} />;
}