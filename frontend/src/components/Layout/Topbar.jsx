import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-[#ea2e0e] text-white">
      <div className="container mx-auto flex justify-between py-3 px-4 md:px-8 lg:px-12">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta></TbBrandMeta>
          </a>

          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram></IoLogoInstagram>
          </a>

          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine></RiTwitterXLine>
          </a>
        </div>

        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>

        <div className="text-sm hidden md:block">
          <a href="tel:+123456789" className="hover:text-gray-300">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
