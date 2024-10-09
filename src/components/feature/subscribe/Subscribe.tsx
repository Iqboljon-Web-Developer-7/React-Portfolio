import React from "react";

import bgImage from "@/assets/subscribe/subscribe.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { Button } from "antd";

const Subscribe = () => {
  return (
    <div
      className="max-w-screen-2xl py-40"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="wrapper flex-center flex-col text-center">
        <div className="subscribe__info">
          <h3 className="text-[2.5rem]">Join Our Newsletter</h3>
          <p className="text-[#141718]">
            Sign up for deals, new products and promotions
          </p>
        </div>
        <form className="min-w-72 sm:min-w-96 p-2 mt-5 flex-center flex-col md:flex-row justify-between bg-[rgba(200,200,200,0.5)] rounded-sm backdrop-blur-sm sm:bg-transparent subscribe__form md:border-b border-slate-400">
          <div className="flex w-full">
            <MdOutlineMailOutline className="min-w-5" />{" "}
            <input
              className="bg-transparent w-full border-none outline-none pl-4 text-sm"
              placeholder="Email address"
              type="text"
              name=""
              id=""
            />
          </div>
          <button
            type="submit"
            className="flex-shrink-0 w-full bg-slate-100  rounded-md mt-2 md:mt-0 md:bg-transparent md:w-auto text-[rgb(155,155,155)!important] hover:text-[rgb(10,10,10)!important]"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
