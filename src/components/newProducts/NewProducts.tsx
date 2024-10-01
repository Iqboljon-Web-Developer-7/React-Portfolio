import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { GoArrowRight } from "react-icons/go";
// import { useGetProductsQuery } from "@/redux/api/products-api";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./styles.scss";

// import required modules
import { Scrollbar } from "swiper/modules";
import ProductCard from "../product/Product";

// Types
import { ProductPropTypes } from "@/types/product";

const NewProducts = () => {
  // const { data } = useGetProductsQuery<ProductPropTypes[]>(null);
  const [paddingL, setPadingL] = useState(0);

  const productInfoContainer = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const target = entry.target as HTMLDivElement;
        setPadingL(target.offsetLeft);
      }
    });

    let container = productInfoContainer.current;

    if (container) {
      resizeObserver.observe(container);
    }
  }, []);

  return (
    <section className="newProducts mt-12">
      <div
        ref={productInfoContainer}
        className="newProducts__info wrapper flex items-end justify-between"
      >
        <h2 className="w-[4ch] text-4xl leading-10">New Arrival</h2>
        <Link
          to={"/"}
          className="flex-center gap-3 underline underline-offset-4"
        >
          More Products <GoArrowRight />
        </Link>
      </div>
      <Swiper
        slidesPerView={"auto"}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="mySwiper mt-5"
        style={{ paddingLeft: `${paddingL}px` }}
      >
        {/* {data?.map((product: ProductPropTypes, idx: number) => (
          <SwiperSlide key={idx} className="product">
            <ProductCard product={product} />
          </SwiperSlide>
        ))} */}
      </Swiper>
    </section>
  );
};

export default NewProducts;
