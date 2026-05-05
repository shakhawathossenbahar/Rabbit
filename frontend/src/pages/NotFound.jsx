import React from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with zoom animation */}
      <motion.img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="404 background"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Brand fade down */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-2xl font-medium mb-4"
        >
          Rabbit
        </motion.h1>

        {/* 404 big text */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-6xl md:text-8xl font-bold tracking-wide"
        >
          404
        </motion.h2>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white text-2xl md:text-4xl font-semibold mt-4"
        >
          PAGE NOT FOUND
        </motion.h3>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-200 mt-4 max-w-md"
        >
          Looks like this page went on vacation 🏖️ Let’s get you back to
          shopping.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 mt-6"
        >
          <Link
            to="/"
            className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
