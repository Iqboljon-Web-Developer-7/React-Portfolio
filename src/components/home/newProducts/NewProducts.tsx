import { useEffect } from "react";
import { Link } from "react-router-dom";

import { GoArrowRight } from "react-icons/go";
import { useGetProductsQuery } from "@/redux/api/products-api";

import { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./styles.scss";

// import required modules
import { Scrollbar } from "swiper/modules";
import ProductCard from "../../feature/product/Product";

// Types
import { ProductPropTypes } from "@/types/product";
import StyledLink from "@/components/feature/styledLink/StyledLink";

interface DataType {
  data: {
    record: ProductPropTypes[];
  };
}
const NewProducts = () => {
  const { data } = useGetProductsQuery<DataType>({});

  const [paddingL, setPaddingL] = useState(0);

  const productInfoContainer = useRef<HTMLDivElement | null>(null);
  const productScrollbar = useRef(null);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const target = entry.target as HTMLDivElement;
        setPaddingL(target.offsetLeft);
      }
    });

    let container = productInfoContainer.current;

    if (container) {
      resizeObserver.observe(container);
      let scrollBarDom = document?.querySelector(
        ".swiper-scrollbar"
      ) as HTMLDivElement;
      let scrollBarDrag = scrollBarDom?.querySelector(".swiper-scrollbar-drag");

      scrollBarDom.classList.add("dark:bg-slate-600");
      scrollBarDrag?.classList.add("dark:bg-slate-400");

      scrollBarDom.style.marginLeft = `${paddingL}px`;
    }
  }, [paddingL]);

  return (
    <section className="newProducts mt-12">
      <div
        ref={productInfoContainer}
        className="newProducts__info wrapper flex items-end justify-between"
      >
        <h2 className="w-[4ch] text-[2.5rem] leading-[1.1] font-medium font-Poppins">
          New Arrival
        </h2>
        <StyledLink to={"/products"} title="More Products" />
      </div>
      <Swiper
        ref={productScrollbar}
        slidesPerView={"auto"}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        id="productsSwiper"
        className="mySwiper mt-5"
        style={{ paddingLeft: `${paddingL}px` }}
      >
        {data ? (
          data?.record?.map((product: ProductPropTypes, idx: number) => (
            <SwiperSlide key={idx} className="product">
              <ProductCard product={product} />
            </SwiperSlide>
          ))
        ) : (
          <div className="flex md:grid grid-cols-4 gap-3">
            {new Array(4).fill(4).map((_, idx) => (
              <div
                key={idx}
                className="animate-pulse p-4 w-2/4 sm:w-1/3 flex-shrink-0 md:w-full h-80 bg-gray-200 rounded-lg"
              >
                <div className="h-48 bg-gray-300 mb-4 rounded-md"></div>
                <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
                <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
                <div className="h-4 bg-gray-300 rounded-md"></div>
              </div>
            ))}
          </div>
        )}
      </Swiper>
    </section>
  );
};

export default NewProducts;
