import { FC } from "react";

import HomeCarousel from "@/components/home/homeCarousel/HomeCarousel";
import NewProducts from "@/components/home/newProducts/NewProducts";
import Services from "@/components/home/services/Services";
import SimplyUnique from "@/components/home/simplyUnique/SimplyUnique";
import Discount from "@/components/home/discount/Discount";
import Articles from "@/components/feature/articles/Articles";

const Home: FC = (): JSX.Element => {
  return (
    <main>
      <HomeCarousel />
      <SimplyUnique />
      <NewProducts />
      <Services />
      <Discount />
      <Articles />
    </main>
  );
};

export default Home;
