import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className="text-white bg-black">
      {/* Hero Section */}
      <div
        className="relative min-h-[80vh] sm:min-h-[90vh] bg-cover bg-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800')",
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="absolute w-[400px] h-[400px] bg-yellow-400 blur-3xl opacity-20 rounded-full -top-32 -left-32 z-0" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase text-yellow-400 tracking-widest drop-shadow-xl"
          >
            Night Beast Gym
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-4 text-sm sm:text-base md:text-2xl text-gray-200 font-semibold max-w-2xl"
          >
            Unleash the warrior within. Train hard. Stay strong. Conquer limits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              to="/membership"
              className="mt-8 inline-block bg-yellow-400 text-black font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full hover:bg-yellow-300 transition duration-300 text-base sm:text-lg animate-pulse"
            >
              Join the Beast Now
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 text-yellow-400 text-lg sm:text-xl animate-bounce"
          >
            <FaArrowDown />
          </motion.div>
        </div>
      </div>

      {/* What We Offer */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-10 uppercase">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {[
            {
              title: "💪 Strength Training",
              desc: "Build muscle with world-class equipment and expert programming.",
            },
            {
              title: "🔥 Fat Burn Programs",
              desc: "Sweat it out in our intense, fat-burning group sessions.",
            },
            {
              title: "🧘 Personal Coaching",
              desc: "Customized 1-on-1 training sessions tailored to your goals.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 sm:p-8 rounded-xl hover:scale-105 transition-transform"
            >
              <h3 className="text-lg sm:text-xl font-bold text-yellow-300 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Trainers */}
      <section className="bg-gray-900 py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12 uppercase">
          Meet Our Trainers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={`https://randomuser.me/api/portraits/men/${i + 30}.jpg`}
                alt={`Trainer ${i}`}
                className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full border-4 border-yellow-400 mb-4 object-cover"
              />
              <h4 className="text-base sm:text-lg font-bold text-yellow-300">
                Beast Coach {i}
              </h4>
              <p className="text-gray-300 text-sm mt-2 max-w-xs">
                Certified fitness trainer with 5+ years of experience pushing limits.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Get Started CTA */}
      <section
        className="relative bg-cover bg-center py-20 sm:py-24 px-4 sm:px-6 text-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/136405/pexels-photo-136405.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-yellow-400 mb-6 uppercase">
            Get Started Today
          </h2>
          <p className="text-gray-200 mb-8 text-base sm:text-lg">
            Join a community of beasts transforming lives through fitness. Whether
            you're a beginner or a pro — your journey starts here.
          </p>
          <Link
            to="/membership"
            className="inline-block bg-yellow-400 text-black font-bold px-6 sm:px-8 py-3 sm:py-3 rounded-full hover:bg-yellow-300 transition duration-300 text-base sm:text-lg"
          >
            Start Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
