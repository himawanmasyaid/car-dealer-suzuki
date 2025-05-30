import React from "react";
import Hero from "./hero";
import Product from "./product";
import Testimoni from "./testimoni";

export default function Home() {
  return (
    <div>
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="product">
          <Product />
        </section>
        <section id="testimoni">
          <Testimoni />
        </section>
      </main>
    </div>
  );
}
