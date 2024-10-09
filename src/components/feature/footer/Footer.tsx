import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 pt-10 md:pt-20">
      <div className="container pb-5 md:pb-12 mx-auto px-4 flex flex-col md:flex-row justify-between items-center border-b border-gray-700">
        <div className="flex gap-3 md:gap-5 flex-col md:flex-row items-center text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-semibold leading-6">3legant.</h1>
          <div className="line self-stretch w-[.1px] bg-[#6C7275]"></div>
          <span className="text-sm text-[#E8ECEF]">
            Gift & Decoration Store
          </span>
        </div>
        <ul className="flex-center flex-wrap gap-3 space-y-0 space-x-0 md:space-x-6 text-center">
          <li>
            <a href="#" className="text-sm hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-gray-400">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-gray-400">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-gray-400">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-gray-400">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="container mb-8 mx-auto px-4 flex-center flex-wrap gap-7 md:justify-between items-center pt-4">
        <p className="text-sm mb-0 text-center">
          © 2023 3legant. All rights reserved
        </p>
        <div className="flex space-x-4 justify-center mb-0">
          <a href="#" className="hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaYoutube />
          </a>
        </div>
        <div className="flex-center flex-wrap gap-3 space-y-0 space-x-0 md:space-x-6 text-center">
          <a href="#" className="text-sm hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:text-gray-400">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
