import React from "react";
import { Link } from "react-router-dom";

import { GoArrowRight } from "react-icons/go";

const NewProducts = () => {
  return (
    <section className="newProducts wrapper mt-12">
      <div className="newProducts__info flex-center justify-between">
        <h2 className="w-[4ch] text-4xl leading-8">New Arrival</h2>
        <Link className="flex-center gap-3 underline underline-offset-4">
          More Products <GoArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default NewProducts;
