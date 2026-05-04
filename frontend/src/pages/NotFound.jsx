import React from "react";
import { Link, useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="404 background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Brand */}
        <h1 className="text-white text-2xl font-medium mb-4">Rabbit</h1>

        {/* 404 Text */}
        <h2 className="text-white text-6xl md:text-8xl font-bold tracking-wide">
          404
        </h2>

        {/* Title */}
        <h3 className="text-white text-2xl md:text-4xl font-semibold mt-4">
          PAGE NOT FOUND
        </h3>

        {/* Subtitle */}
        <p className="text-gray-200 mt-4 max-w-md">
          Looks like this page went on vacation 🏖️ Let’s get you back to
          shopping.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          {/* Shop Now */}
          <Link
            to="/"
            className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>

          {/* Go Back */}
          <button
            onClick={() => navigate(-1)}
            className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
