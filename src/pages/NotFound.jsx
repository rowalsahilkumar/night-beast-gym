import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Glow Effect */}
      <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] bg-yellow-400 blur-3xl opacity-20 rounded-full top-10 left-10 z-0" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-yellow-400 tracking-widest drop-shadow-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          404
        </motion.h1>

        <motion.p
          className="mt-4 text-base sm:text-lg md:text-2xl text-gray-200 font-semibold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          You wandered off the track! This page doesn’t exist.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <Link
            to="/"
            className="inline-block bg-yellow-400 text-black font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-yellow-300 transition duration-300 text-sm sm:text-base md:text-lg"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
