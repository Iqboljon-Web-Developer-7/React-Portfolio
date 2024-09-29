import HomeCarousel from "@/components/homeCarousel/HomeCarousel";
import NewProducts from "@/components/newProducts/NewProducts";
import SimplyUnique from "@/components/simplyUnique/SimplyUnique";
import React from "react";

const Home = () => {
  return (
    <main>
      <HomeCarousel />
      <SimplyUnique />
      <NewProducts />
    </main>
  );
};

export default Home;
