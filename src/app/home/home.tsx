import React from "react";
// import Cta from "./cta";
// import TestimonialOffWhiteGrid from "./testimonial_white_off_grid";
import PriceList from "./pricelist";
import Hero from "./hero";
import Testimoni from "./testimoni";
import Cta from "./cta";

export default function Home() {
  return (
    <div>
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="pricelist">
          <PriceList />
        </section>
        <section id="testimoni">
          <Testimoni />
        </section>
        <section id="cta">
          <Cta />
        </section>
      </main>
    </div>
  );
}
