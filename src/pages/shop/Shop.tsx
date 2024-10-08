import PageInfo from "@/components/feature/pageinfo/PageInfo";

import image from "@/assets/shop/banner.png";
import RangeSlider from "@/components/shop/priceSlider/PriceSlider";

const Shop = () => {
  return (
    <div>
      <PageInfo
        path={"shop"}
        title="Shop page"
        img={image}
        desc={"Let’s design the place you always imagined."}
      />
      <RangeSlider />
    </div>
  );
};

export default Shop;
