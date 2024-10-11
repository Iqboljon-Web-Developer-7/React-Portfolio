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
// import { FaOpencart } from "react-icons/fa";
import { RiMenu5Line } from "react-icons/ri";
import CartIcon from "@/assets/header/cart-icon.svg";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/pages/theme-provider";

const Header = () => {
  const { setTheme } = useTheme();
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
          ? "animate-fade-in-top-1 bg-[#ffffffbb] dark:bg-[#000000bb] shadow-md"
          : "z-20 bg-white dark:bg-black border-b"
      } backdrop-blur-sm z-20`}
    >
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="wrapper flex justify-between items-center gap-2">
        <div className="heaer__logo">
          <Link to={"/"}>
            <img src={websiteLogo} alt="website logo" className="dark:invert" />
          </Link>
        </div>
        <div className="header__links text-sm text-slate-400 opacity-0 w-0 md:opacity-100 md:w-auto md:flex items-center justify-center gap-5">
          <NavLink className="dark:text-slate-400" to={"/"}>
            Home
          </NavLink>
          <NavLink className="dark:text-slate-400" to={"/shop"}>
            Shop
          </NavLink>
          <NavLink className="dark:text-slate-400" to={"/product"}>
            Product
          </NavLink>
          <NavLink className="dark:text-slate-400" to={"/contact"}>
            Contact Us
          </NavLink>
        </div>

        <div className="header__icons flex items-center justify-center gap-4 text-2xl">
          <RiSearch2Line />
          <Link to={"/adminPanel"}>
            <LuUserCircle />
          </Link>

          <Sheet>
            <SheetTrigger>
              <div className="animate-fade-in-top-2 flex items-center justify-center gap-1">
                <img src={CartIcon} className="dark:invert" />{" "}
                {/* {cart.length > 0 && ( */}
                <span className="inset-[-.3rem_-.3rem_auto_auto] h-5 min-w-5 text-[.78rem] rounded-full flex items-center justify-center text-slate-200 dark:text-slate-950 bg-black dark:bg-slate-100">
                  {/* {cart?.length} */}2
                </span>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
