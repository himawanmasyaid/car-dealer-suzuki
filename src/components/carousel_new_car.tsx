import Link from "next/link";
import { new_cars } from "@/data/new_cars";
import CardCarnew from "./card/card_car_new";
import { NavigationScreen } from "@/constants/navigation_screen";

export async function CarouselNewCar() {
    
  if (!new_cars?.length) return null;

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {new_cars.map((car, i) => (
          <li
            key={`${car.id}${i}`}
            className="relative aspect-square flex-none md:w-1/3"
          >
            <Link
              href={NavigationScreen.CarDetail(car.id)}
              className="relative h-full w-full"
            >
              <CardCarnew
                key={car.id}
                name={car.name}
                image={car.image}
                price_start={car.price_start}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
