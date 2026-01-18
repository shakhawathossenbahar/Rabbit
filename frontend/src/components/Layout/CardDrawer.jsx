import React from "react";
import { IoMdClose } from "react-icons/io";

const CardDrawer = ({drawerOpen, setDrawerOpen, toggleCardDrawer}) => {


  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-500 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCardDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600"></IoMdClose>
        </button>
      </div>
    </div>
  );
};

export default CardDrawer;