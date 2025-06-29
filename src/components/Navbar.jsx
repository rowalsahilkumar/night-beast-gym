import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaDumbbell, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
      : "text-gray-200 hover:text-yellow-300 transition duration-300";

  return (
    <header className="bg-[#0a0a0a] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <FaDumbbell className="text-yellow-400 text-2xl" />
          <span className="text-white font-extrabold text-xl tracking-wide uppercase">
            Night Beast Gym
          </span>
        </div>

        {/* Hamburger Icon (mobile only) */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex space-x-6 text-base font-semibold">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/membership" className={linkClass}>
            Membership
          </NavLink>
          <NavLink to="/contactus" className={linkClass}>
            Contact
          </NavLink>
          <NavLink to="/help" className={linkClass}>
            Help
          </NavLink>
        </nav>
      </div>

      {/* Navigation Links - Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] px-6 pb-4">
          <nav className="flex flex-col space-y-4 font-semibold text-base">
            <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink to="/membership" className={linkClass} onClick={() => setIsOpen(false)}>
              Membership
            </NavLink>
            <NavLink to="/contactus" className={linkClass} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
            <NavLink to="/help" className={linkClass} onClick={() => setIsOpen(false)}>
              Help
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
