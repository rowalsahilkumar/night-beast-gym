import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="text-white bg-black">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[600px] sm:h-[650px] md:h-[700px]"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')`,
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        {/* Animated Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 uppercase tracking-widest drop-shadow-xl mb-4"
          >
            About Night Beast Gym
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-base sm:text-lg md:text-2xl font-semibold text-gray-200 max-w-3xl"
          >
            <span className="italic text-yellow-300 font-bold">
              "Train Like a Beast, Live Like a Legend"
            </span>
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6">
          Who We Are
        </h2>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Night Beast Gym is not just a fitness center — it's a lifestyle movement.
          Our mission is to empower individuals to transform their mind, body, and
          life through a results-driven training environment. With state-of-the-art
          equipment, experienced trainers, and a powerful community, we’re here to
          help you become the strongest version of yourself.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-900 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              To create a motivating space where anyone can achieve their fitness goals,
              no matter their age or experience. We believe fitness is a journey — and
              we’re with you every step of the way.
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4">
              Our Vision
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              To be India’s most trusted and results-oriented gym brand, inspiring a
              generation to lead healthier, more empowered lives.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 text-center mb-10">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition-transform">
            <h4 className="text-lg sm:text-xl font-bold mb-2 text-yellow-300">
              💪 Expert Trainers
            </h4>
            <p className="text-gray-300 text-sm sm:text-base">
              Certified professionals to guide your workouts and diet plans.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition-transform">
            <h4 className="text-lg sm:text-xl font-bold mb-2 text-yellow-300">
              🏋️‍♂️ Advanced Equipment
            </h4>
            <p className="text-gray-300 text-sm sm:text-base">
              Top-notch machines and free weights for every training goal.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition-transform">
            <h4 className="text-lg sm:text-xl font-bold mb-2 text-yellow-300">
              🔥 Motivating Environment
            </h4>
            <p className="text-gray-300 text-sm sm:text-base">
              Train with like-minded warriors who push each other daily.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-400 text-black py-10 sm:py-12 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
          Ready to Join the Beast Movement?
        </h2>
        <p className="text-base sm:text-lg">
          Unleash your potential and transform your life with us.
        </p>
      </section>
    </div>
  );
};

export default About;
