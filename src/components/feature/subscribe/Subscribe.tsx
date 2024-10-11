import bgImage from "@/assets/subscribe/subscribe.png";
import { MdOutlineMailOutline } from "react-icons/md";

const Subscribe = () => {
  return (
    <div
      className="max-w-screen-2xl py-40 mx-auto bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="wrapper flex-center flex-col text-center">
        <div className="subscribe__info">
          <h3 className="text-[2.5rem] dark:text-slate-800">
            Join Our Newsletter
          </h3>
          <p className="text-[#141718]">
            Sign up for deals, new products and promotions
          </p>
        </div>
        <form className="min-w-72 sm:min-w-96 p-2 pb-1 mt-5 flex-center flex-col md:flex-row justify-between bg-[rgba(200,200,200,0.5)] rounded-sm backdrop-blur-sm sm:bg-transparent subscribe__form md:border-b border-slate-400">
          <div className="flex w-full">
            <MdOutlineMailOutline className="min-w-5 text-2xl dark:text-slate-700" />{" "}
            <input
              className="bg-transparent w-full border-none outline-none pl-4 text-sm dark:text-slate-900"
              placeholder="Email address"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <button
            type="submit"
            className="flex-shrink-0 w-full bg-slate-100 dark:bg-slate-800 px-3 py-1 hover:text-[rgb(226,232,240] rounded-md mt-2 md:mt-0 md:bg-transparent md:w-auto text-[rgb(120,120,120)!important] dark:text-[rgb(200,200,200)!important] hover:text-[rgb(10,10,10)!important] hover:dark:text-[rgb(232,232,232)!important]"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
