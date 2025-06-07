import React from "react";
// import Cta from "./cta";
// import TestimonialOffWhiteGrid from "./testimonial_white_off_grid";
import PriceList from "./pricelist";
import Hero from "./hero";

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
        {/* <section id="testimoni">
          <TestimonialOffWhiteGrid />
        </section>
        <section id="cta">
          <Cta />
        </section> */}
      </main>
    </div>
  );
}
