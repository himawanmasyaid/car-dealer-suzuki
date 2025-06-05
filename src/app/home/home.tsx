import React from "react";
import Cta from "./cta";
import TestimonialOffWhiteGrid from "./testimonial_white_off_grid";
import HeroV2 from "./hero_v2";
import PriceList from "./pricelist";

export default function Home() {
  return (
    <div>
      <main>
        <section id="hero">
          <HeroV2 />
        </section>
        <section id="pricelist">
          <PriceList />
        </section>
        <section id="testimoni">
          <TestimonialOffWhiteGrid />
        </section>
        <section id="cta">
          <Cta />
        </section>
      </main>
    </div>
  );
}
