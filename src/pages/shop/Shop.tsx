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
      <div className="shop__main grid grid-cols-[2fr_6fr] mt-[3.75rem]">
        <div className="shop__main--filter">
          <div className="filter__info">
            <h3 className="flex-center justify-start text-xl gap-4 font-medium">
              <VscSettings /> Filter
            </h3>
            <div className="filter__categories mt-8">
              <h3 className="font-medium">CATEGORIES</h3>
              <div className="filter__categories--wrapper max-h-44 overflow-auto flex flex-col gap-3 mt-4">
                {new Array(8).fill(8).map((item) => (
                  <span>category item</span>
                ))}
              </div>
            </div>
            <div className="filter__price mt-8">
              <h3 className="font-medium">PRICE</h3>
              <div className="filter__price--wrapper max-h-44 overflow-auto flex flex-col gap-3 mt-4">
                {new Array(8).fill(8).map((item) => (
                  <span>category item</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="shop__main--products">1</div>
      </div>
      {/* <RangeSlider /> */}
    </div>
  );
};

export default Shop;
