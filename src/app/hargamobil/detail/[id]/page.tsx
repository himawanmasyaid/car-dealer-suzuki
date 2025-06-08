import { DataPriceList } from "@/data/data_pricelist";
import CarDetailClient from "./car_detail_client";

export default async function ProductDetail(props: {
  params: Promise<{ slug: string }>;
}) {

  const params = await props.params;
  const car = await DataPriceList.find((c) => c.id === params.slug);

  if (!car) {
    return <div>Mobil tidak ditemukan</div>;
  }

  return <CarDetailClient car={car} />;
}