import React, { useEffect, useState } from "react";

// Components
import { Link, NavLink } from "react-router-dom";
import MobileNav from "../mobileNav/MobileNav";

// Images
import websiteLogo from "@/assets/logo.svg";

// import websiteLogo from "@/asse"
import { RiSearch2Line } from "react-icons/ri";
import { LuUserCircle } from "react-icons/lu";

// Icons
import { FaOpencart } from "react-icons/fa";
import { RiMenu5Line } from "react-icons/ri";
import CartIcon from "@/assets/header/cart-icon.svg";

const Header = () => {
  // Mobile header
  const [isOpen, setIsOpen] = useState(false);

  // on scroll get fixed
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    });
  }, []);
  return (
    <header
      className={`header-wrapper sticky top-0 mx-auto py-5 px-1 xs:px-2 duration-200 ${
        isFixed
          ? "animate-fade-in-top-1 bg-[#00000022] shadow-md"
          : "z-20 bg-white border-b"
      } backdrop-blur-sm z-20`}
    >
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="wrapper flex justify-between items-center gap-2">
        <div className="heaer__logo">
          <Link to={"/"}>
            <img src={websiteLogo} alt="website logo" />
          </Link>
        </div>
        <div className="header__links text-sm text-slate-400 opacity-0 w-0 md:opacity-100 md:w-auto md:flex items-center justify-center gap-5">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/shop"}>Shop</NavLink>
          <NavLink to={"/product"}>Product</NavLink>
          <NavLink to={"/contact"}>Contact Us</NavLink>
        </div>

        <div className="header__icons flex items-center justify-center gap-4 text-2xl">
          <RiSearch2Line />
          <Link to={"/adminPanel"}>
            <LuUserCircle />
          </Link>

          <Link
            to={"/cart"}
            className="text-green-800 animate-fade-in-top-2 flex items-center justify-center gap-1"
          >
            <img src={CartIcon} /> {/* {cart.length > 0 && ( */}
            <span className="inset-[-.3rem_-.3rem_auto_auto] h-5 min-w-5 text-[.78rem] rounded-full flex items-center justify-center text-slate-200 bg-black">
              {/* {cart?.length} */}2
            </span>
            {/* )} */}
          </Link>
          <RiMenu5Line
            className="cursor-pointer md:hidden text-2xl sm:text-3xl"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
