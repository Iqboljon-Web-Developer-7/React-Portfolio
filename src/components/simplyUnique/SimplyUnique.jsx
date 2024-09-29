import React from "react";
import { Link } from "react-router-dom";

// icons
import { GoArrowRight } from "react-icons/go";

// Images
import simpleImg1 from "@/assets/simple/simple-1.png";
import simpleImg2 from "@/assets/simple/simple-2.png";
import simpleImg3 from "@/assets/simple/simple-3.png";

const SimplyUnique = () => {
  return (
    <section className="simple wrapper mt-8">
      <div className="simple__info flex-center justify-between flex-col gap-5 text-center md:text-left md:flex-row">
        <div className="simple__info--left sm:w-3/4 text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
          <h2>
            Simply Unique<span className="text-[#6C7275]">/</span>{" "}
          </h2>
          <h2>Simply Better.</h2>
        </div>
        <div className="simple__info--right sm:w-2/4">
          <p className="font-light text-slate-500 text-sm lg:text-base">
            <spane className="text-slate-900 font-semibold">3legant</spane> is a
            gift & decorations store based in HCMC, Vietnam. Est since 2019.{" "}
          </p>
        </div>
      </div>
      <div className="simple__products mt-10 min-h-[41.5rem] grid md:grid-cols-2 gap-6">
        <div className="simple__proucts--item row-span-2 min-h-[20rem]">
          <div
            className="s-p-i-info h-full bg-center bg-no-repeat bg-cover p-8 sm:p-12"
            style={{ backgroundImage: `url(${simpleImg1})` }}
          >
            <h3 className="text-3xl tracking-wide">Living Room</h3>
            <Link className="mt-3 flex-center justify-start gap-2 underline underline-offset-4">
              Shop now <GoArrowRight />
            </Link>
          </div>
        </div>
        <div className="simple__proucts--item min-h-[20rem]">
          <div
            className="s-p-i-info h-full p-8 sm:p-12 bg-right sm:bg-center bg-no-repeat bg-cover flex md:justify-end flex-col"
            style={{ backgroundImage: `url(${simpleImg2})` }}
          >
            <h3 className="text-3xl tracking-wide">Bedroom</h3>
            <Link className="mt-3 flex-center justify-start gap-2 underline underline-offset-4">
              Shop now <GoArrowRight />
            </Link>
          </div>
        </div>
        <div className="simple__proucts--item min-h-[20rem]">
          <div
            className="s-p-i-info h-full p-8 sm:p-12 bg-right sm:bg-center bg-no-repeat bg-cover flex md:justify-end flex-col"
            style={{ backgroundImage: `url(${simpleImg3})` }}
          >
            <h3 className="text-3xl tracking-wide">Kitchen</h3>
            <Link className="mt-3 flex-center justify-start gap-2 underline underline-offset-4">
              Shop now <GoArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplyUnique;
