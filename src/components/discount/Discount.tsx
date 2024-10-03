import React from "react";

import discountImg from "@/assets/discount/discount-sale.png";
import { Link } from "@mui/material";

import { BsChevronRight } from "react-icons/bs";

const Discount = () => {
  return (
    <section className="max-w-screen-2xl mx-auto discount flex-center flex-col sm:flex-row">
      <div className="discount__img sm:w-1/2">
        <img src={discountImg} alt="discount home interier img" />
      </div>
      <div className="discount__info bg-[#F3F5F7] self-stretch flex-center flex-col items-start p-10 sm:p-0 sm:pl-[8%] sm:pr-[3%]">
        <p className="discount__info--title text-sm md:text-base font-semibold text-[#377DFF]">
          SALE UP TO 35% OFF
        </p>
        <div className="my-3 sm:my-1 lg:my-4 grid gap-1 text-3xl sm:text-[1.25rem] md:text-[2rem] lg:text-[2.5rem]">
          <h3 className="text-[#141718] leading-6 sm:leading-5 md:leading-9">
            HUNDREDS of
          </h3>
          <h3 className="text-[#141718] leading-6 sm:leading-6 md:leading-9">
            New lower prices!
          </h3>
        </div>
        <p className="text-base sm:text-sm md:text-base lg:text-xl max-w-[28.25rem] text-[#141718] font-light">
          It’s more affordable than ever to give every room in your home a
          stylish makeover
        </p>
        <a
          href="#"
          className="mt-3 sm:mt-1 lg:mt-6 flex items-center justify-center gap-3 underline underline-offset-4"
        >
          Shop Now <BsChevronRight />
        </a>
        {/* <Link to={"/discount"}></Link> */}
      </div>
    </section>
  );
};

export default Discount;
