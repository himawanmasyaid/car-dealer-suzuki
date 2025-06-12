import React from "react";
import PriceList from "./pricelist";
import Hero from "./hero";
import Testimoni from "./testimoni";
import Cta from "./cta";
import LeasingPartner from "./leasingpartner";

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
        <section id="leasingpartner">
          <LeasingPartner />
        </section>
        <section id="cta">
          <Cta />
        </section>
      </main>
    </div>
  );
}
