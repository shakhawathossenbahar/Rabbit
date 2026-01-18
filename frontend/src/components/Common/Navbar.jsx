import React, { useState } from "react";
import { Link } from "react-router";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CardDrawer from "../Layout/CardDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleCardDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8 lg:px-12">
        {/* Left - Logo */}
        <div>
          <Link to={"/"} className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to={"#"}
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>

          <Link
            to={"#"}
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>

          <Link
            to={"#"}
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>

          <Link
            to={"#"}
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        {/* Right - Icons */}
        <div className="flex justify-center items-center space-x-4">
          <Link to={"/profile"} className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700"></HiOutlineUser>
          </Link>

          <button
          onClick={toggleCardDrawer}
          className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700"></HiOutlineShoppingBag>
            <span className="absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5">
              5
            </span>
          </button>

          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar></SearchBar>
          </div>

          <button className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700"></HiBars3BottomRight>
          </button>
        </div>
      </nav>

      <CardDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} toggleCardDrawer={toggleCardDrawer}></CardDrawer>
    </>
  );
};

export default Navbar;
