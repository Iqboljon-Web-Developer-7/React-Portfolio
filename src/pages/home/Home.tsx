import React, { FC } from "react";

import HomeCarousel from "@/components/homeCarousel/HomeCarousel";
import NewProducts from "@/components/newProducts/NewProducts";
import Services from "@/components/services/Services";
import SimplyUnique from "@/components/simplyUnique/SimplyUnique";
import Discount from "@/components/discount/Discount";

const Home: FC = (): JSX.Element => {
  return (
    <main>
      <HomeCarousel />
      <SimplyUnique />
      <NewProducts />
      <Services />
      <Discount />
    </main>
  );
};

export default Home;
