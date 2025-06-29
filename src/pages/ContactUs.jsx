import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] sm:h-[550px] md:h-[600px]"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 uppercase tracking-widest drop-shadow-lg"
          >
            Contact Night Beast Gym
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-4 text-base sm:text-lg md:text-2xl text-gray-200 font-semibold max-w-2xl"
          >
            Unleash the warrior within. Train hard. Stay strong. Conquer limits.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-8 text-center"
        >
          Get In Touch
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none text-sm sm:text-base"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none text-sm sm:text-base"
          />
          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none text-sm sm:text-base"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-500 transition w-full sm:w-auto"
          >
            Send Message
          </button>
        </motion.form>
      </section>

      {/* Contact Info */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="bg-gray-900 py-12 px-4 sm:px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4">
            Contact Details
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mb-2">
            📍 123 Fitness Street, New Delhi, India
          </p>
          <p className="text-gray-300 text-sm sm:text-base mb-2">
            📞 +91 98765 43210
          </p>
          <p className="text-gray-300 text-sm sm:text-base">
            ✉️ support@nightbeastgym.com
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;
