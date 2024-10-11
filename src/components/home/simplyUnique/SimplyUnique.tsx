import React, { FC } from "react";
import { Link } from "react-router-dom";

// icons
import { GoArrowRight } from "react-icons/go";

// Images
import simpleImg1 from "@/assets/simple/simple-1.png";
import simpleImg2 from "@/assets/simple/simple-2.png";
import simpleImg3 from "@/assets/simple/simple-3.png";
import StyledLink from "@/components/feature/styledLink/StyledLink";

const SimplyUnique: FC = (): JSX.Element => {
  return (
    <section className="simple wrapper mt-8">
      <div className="simple__info flex-center justify-between flex-col gap-5 text-center md:text-left md:flex-row">
        <div className="simple__info--left font-medium sm:w-3/4 text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
          <h2>
            Simply Unique<span className="text-[#6C7275]">/</span>{" "}
          </h2>
          <h2>Simply Better.</h2>
        </div>
        <div className="simple__info--right sm:w-2/4">
          <p className="font-light leading-[1.8!important] tracking-wide text-slate-500 dark:text-slate-300 text-sm lg:text-base">
            <span className="text-slate-900 dark:text-slate-200 font-medium">
              3legant
            </span>{" "}
            is a gift & decorations store based in HCMC, Vietnam. Est since
            2019.{" "}
          </p>
        </div>
      </div>
      <div className="simple__products mt-10 min-h-[41.5rem] grid md:grid-cols-2 gap-6 font-medium dark:text-slate-700">
        <div className="simple__proucts--item row-span-2 min-h-[20rem]">
          <div
            className="s-p-i-info h-full bg-center bg-no-repeat bg-cover p-8 sm:p-12"
            style={{ backgroundImage: `url(${simpleImg1})` }}
          >
            <h3 className="text-[2.125rem] tracking-wide">Living Room</h3>
            <StyledLink to={"/"} title="Shop Now"></StyledLink>
          </div>
        </div>
        <div className="simple__proucts--item min-h-[20rem]">
          <div
            className="s-p-i-info h-full p-8 sm:p-12 bg-right sm:bg-center bg-no-repeat bg-cover flex md:justify-end flex-col"
            style={{ backgroundImage: `url(${simpleImg2})` }}
          >
            <h3 className="text-[2.125rem] tracking-wide">Bedroom</h3>
            <StyledLink to={"/"} title="Shop Now"></StyledLink>
          </div>
        </div>
        <div className="simple__proucts--item min-h-[20rem]">
          <div
            className="s-p-i-info h-full p-8 sm:p-12 bg-right sm:bg-center bg-no-repeat bg-cover flex md:justify-end flex-col"
            style={{ backgroundImage: `url(${simpleImg3})` }}
          >
            <h3 className="text-[2.125rem] tracking-wide">Kitchen</h3>
            <StyledLink to={"/"} title="Shop Now"></StyledLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplyUnique;
