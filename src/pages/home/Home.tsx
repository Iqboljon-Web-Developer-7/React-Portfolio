import { FC } from "react";

import HomeCarousel from "@/components/home/homeCarousel/HomeCarousel";
import NewProducts from "@/components/home/newProducts/NewProducts";
import Services from "@/components/home/services/Services";
import SimplyUnique from "@/components/home/simplyUnique/SimplyUnique";
import Discount from "@/components/home/discount/Discount";
import Blogs from "@/components/feature/blogs/Blogs";
import Subscribe from "@/components/feature/subscribe/Subscribe";
import Footer from "@/components/feature/footer/Footer";

const Home: FC = (): JSX.Element => {
  return (
    <main>
      <HomeCarousel />
      <SimplyUnique />
      <NewProducts />
      <Services />
      <Discount />
      <Blogs />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default Home;
