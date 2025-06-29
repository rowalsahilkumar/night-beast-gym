import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Help = () => {
  return (
    <div className="text-white bg-black min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[450px] sm:h-[500px] md:h-[550px]"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div>
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 uppercase tracking-widest mb-4 drop-shadow-lg"
            >
              Need Help?
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-sm sm:text-base md:text-lg text-gray-300 font-medium max-w-2xl mx-auto"
            >
              We’re here to answer your questions and support your fitness journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-10 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          <div className="bg-gray-800 p-5 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-300 mb-2">
              🕒 What are your gym timings?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              We are open 7 days a week, from 5:00 AM to 11:00 PM.
            </p>
          </div>
          <div className="bg-gray-800 p-5 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-300 mb-2">
              💳 Do you offer monthly and yearly plans?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Yes! We offer flexible monthly, quarterly, and annual membership plans to suit all needs.
            </p>
          </div>
          <div className="bg-gray-800 p-5 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-300 mb-2">
              🏋️‍♀️ Do I need a personal trainer?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Personal trainers are optional. You can train independently or choose a personal coach for a more guided experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="bg-gray-900 py-12 sm:py-16 px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4"
        >
          Still need assistance?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 text-base sm:text-lg mb-6"
        >
          Reach out to our support team — we’re happy to help!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base sm:text-lg text-gray-300 space-y-2"
        >
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@nightbeastgym.com</p>
          <Link
            to="/contactus"
            className="inline-block mt-6 bg-yellow-400 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Help;
