import PageInfo from "@/components/feature/pageinfo/PageInfo";

// Images
import image from "@/assets/shop/banner.png";

// Icons
import { VscSettings } from "react-icons/vsc";

// Components
import RangeSlider from "@/components/shop/priceSlider/PriceSlider";

const Shop = () => {
  return (
    <div className="wrapper">
      <PageInfo
        path={"shop"}
        title="Shop page"
        img={image}
        desc={"Let’s design the place you always imagined."}
      />
      <div className="shop__main grid grid-cols-[3fr_6fr] mt-[3.75rem]">
        <div className="shop__main--filter">
          <div className="filter__info flex-center justify-start text-xl gap-4 font-medium">
            <VscSettings /> Filter
          </div>
        </div>
        <div className="shop__main--products">1</div>
      </div>
      {/* <RangeSlider /> */}
    </div>
  );
};

export default Shop;
