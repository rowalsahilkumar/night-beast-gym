import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "₹999/month",
    features: [
      "Access to gym equipment",
      "Locker facility",
      "Changing room access",
    ],
    bg: "bg-gray-800",
    buttonColor: "bg-yellow-400 text-black hover:bg-yellow-300",
  },
  {
    name: "Pro",
    price: "₹1,999/month",
    features: [
      "Everything in Basic",
      "Group workout sessions",
      "Diet consultation",
    ],
    bg: "bg-yellow-500 text-black",
    buttonColor: "bg-black text-yellow-400 hover:bg-gray-900",
    recommended: true,
  },
  {
    name: "Beast Mode",
    price: "₹2,999/month",
    features: [
      "Everything in Pro",
      "Personal trainer (1-on-1)",
      "Custom workout & diet plans",
      "Weekly progress tracking",
    ],
    bg: "bg-gray-800",
    buttonColor: "bg-yellow-400 text-black hover:bg-yellow-300",
  },
];

const Membership = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[450px] sm:h-[500px] md:h-[600px]"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 uppercase tracking-widest mb-4 drop-shadow-lg"
          >
            Membership Plans
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 font-medium max-w-2xl mx-auto"
          >
            Choose the perfect plan to fuel your fitness journey and train like a beast.
          </motion.p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`${plan.bg} rounded-xl shadow-xl p-6 sm:p-8 flex flex-col items-center justify-between border-2 ${
                plan.recommended ? "border-yellow-400" : "border-gray-700"
              } hover:scale-105 transition-transform duration-300`}
            >
              {plan.recommended && (
                <span className="bg-black text-yellow-400 font-bold px-4 py-1 rounded-full mb-4 text-sm sm:text-base">
                  Recommended
                </span>
              )}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase mb-2">{plan.name}</h2>
              <p className="text-lg sm:text-xl font-semibold mb-6">{plan.price}</p>
              <ul className="text-gray-300 mb-8 space-y-3 text-sm sm:text-base text-center">
                {plan.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              <button
                className={`px-5 sm:px-6 py-2 rounded-full font-bold text-sm sm:text-lg transition ${plan.buttonColor}`}
              >
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="bg-yellow-400 text-black py-12 sm:py-16 text-center px-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
          Unleash the Beast in You!
        </h2>
        <p className="text-base sm:text-lg mb-6">
          Start your transformation today with Night Beast Gym.
        </p>
        <a
          href="/contactus"
          className="bg-black text-yellow-400 px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-gray-900 transition text-sm sm:text-base"
        >
          Contact Us for Assistance
        </a>
      </motion.section>
    </div>
  );
};

export default Membership;
