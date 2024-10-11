import React from "react";

import img1 from "@/assets/services/car.svg";
import img2 from "@/assets/services/money.svg";
import img3 from "@/assets/services/lock.svg";
import img4 from "@/assets/services/call.svg";

const Services = () => {
  return (
    <section className="services wrapper my-14 px-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
      <div className="service bg-[#F3F5F7] dark:bg-slate-800 py-12 pl-[14%] pr-[3%] grid gap-2">
        <img
          src={img1}
          alt="service car icon"
          className="max-w-12 dark:invert"
        />
        <h4 className="text-xl lg:text-[calc(min(.7vw+.7rem,1.5rem))]">
          Free Shipping
        </h4>
        <p className="text-sm text-slate-500 dark:text-slate-300">
          Order above $200
        </p>
      </div>
      <div className="service bg-[#F3F5F7] dark:bg-slate-800 py-12 pl-[14%] pr-[3%] grid gap-2">
        <img
          src={img2}
          alt="service money icon"
          className="max-w-12 dark:invert"
        />
        <h4 className="text-xl lg:text-[calc(min(.7vw+.7rem,1.5rem))]">
          Money-back
        </h4>
        <p className="text-sm text-slate-500 dark:text-slate-300">
          30 days guarantee
        </p>
      </div>
      <div className="service bg-[#F3F5F7] dark:bg-slate-800 py-12 pl-[14%] pr-[3%] grid gap-2">
        <img
          src={img3}
          alt="service lock icon"
          className="max-w-12 dark:invert"
        />
        <h4 className="text-xl lg:text-[calc(min(.7vw+.7rem,1.5rem))]">
          Secure Payments
        </h4>
        <p className="text-sm text-slate-500 dark:text-slate-300">
          Secured by Stripe
        </p>
      </div>
      <div className="service bg-[#F3F5F7] dark:bg-slate-800 py-12 pl-[14%] pr-[3%] grid gap-2">
        <img
          src={img4}
          alt="service call icon"
          className="max-w-12 dark:invert"
        />
        <h4 className="text-xl lg:text-[calc(min(.7vw+.7rem,1.5rem))]">
          24/7 Support
        </h4>
        <p className="text-sm text-slate-500 dark:text-slate-300">
          Phone and Email support
        </p>
      </div>
    </section>
  );
};

export default Services;
