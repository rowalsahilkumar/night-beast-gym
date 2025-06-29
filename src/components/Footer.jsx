import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg')`,
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Footer Content */}
      <div className="relative z-10 px-6 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h2 className="text-2xl font-extrabold uppercase text-yellow-400 mb-4">
              Night Beast Gym
            </h2>
            <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
              We are committed to transforming your body and lifestyle through
              powerful training, proper nutrition, and expert coaching.
              <br />
              <span className="italic text-yellow-300 font-semibold">
                Train like a beast. Live like a legend.
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm sm:text-base font-semibold">
              <li>
                <Link to="/" className="hover:text-yellow-300 transition">
                  🏠 Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-300 transition">
                  👤 About Us
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="hover:text-yellow-300 transition">
                  📞 Contact
                </Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-yellow-300 transition">
                  💳 Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4 uppercase">
              Follow Us
            </h3>
            <ul className="space-y-3 text-sm sm:text-base font-semibold">
              <li>
                <a href="#" className="hover:text-yellow-300 transition">
                  📸 Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300 transition">
                  📘 Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300 transition">
                  ▶️ YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4 uppercase">
              Contact
            </h3>
            <p className="text-gray-200 mb-2 text-sm sm:text-base">
              📍 123 Fitness Street, New Delhi, India
            </p>
            <p className="text-gray-200 mb-2 text-sm sm:text-base">
              📞 +91 98765 43210
            </p>
            <p className="text-gray-200 text-sm sm:text-base">
              ✉️ support@nightbeastgym.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-black bg-opacity-90 text-center py-4 text-sm sm:text-base font-bold text-gray-300 tracking-wide">
        © {new Date().getFullYear()} Night Beast Gym. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
