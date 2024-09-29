import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const MobileNav = ({ isOpen, setIsOpen }) => {
  const handleClick = (e) => {
    e = e.target.classList;

    e.contains("close-icon") || e.contains("mobileNav")
      ? setIsOpen(false)
      : null;
  };

  return (
    <div
      className={`mobileNav flex justify-end items-centeer transition-all duration-200 bg-[#00000055] opacity-0 min-h-lvh ${
        isOpen ? "animate-fadeIn" : "animate-fadeOut"
      } fixed z-50`}
      onClick={(e) => handleClick(e)}
    >
      <div className="header__links px-20 text-slate-400 flex justify-center items-center flex-col gap-2 bg-[#ffffff]">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/shop"}>Shop</NavLink>
        <NavLink to={"/product"}>Product</NavLink>
        <NavLink to={"/contact"}>Contact Us</NavLink>
        <span className="absolute inset-[4%_4%_auto_auto] cursor-pointer close-icon text-slate-800">
          X
        </span>
      </div>
    </div>
  );
};

export default memo(MobileNav);
