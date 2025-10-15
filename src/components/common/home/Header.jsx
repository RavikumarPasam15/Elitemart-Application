import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Header = ({ scrollToSection, refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-gradient-to-r from-orange-200 via-white to-orange-100 p-2">
      <div className="flex justify-between items-center px-4 md:px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-4 md:space-x-10 pl-4 md:pl-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="Logo"
            className="w-10 h-10"
          />
          <h1 className="text-3xl font-extrabold text-orange-600">Elitemart</h1>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 mx-6">
          <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm px-3 py-2 w-full">
            <select className="bg-white text-gray-700 text-sm px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400 transition w-32 md:w-40">
              <option>All</option>
              <option>Fruits</option>
              <option>Vegetables</option>
              <option>Snacks</option>
              <option>Drinks</option>
            </select>

            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 ml-2 outline-none text-gray-800"
            />
            <FaSearch className="text-gray-600 ml-3 cursor-pointer" />
          </div>
        </div>

        {/* Right Side Desktop */}
        <div className="hidden md:flex ml-7 items-center space-x-4 md:space-x-9">
          <button className="px-6 md:px-9 py-1 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
            Login
          </button>
          <button className="px-6 md:px-9 py-1 border-2 border-orange-500 text-orange-600 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg w-full px-4 py-4 space-y-4">
          <div className="flex items-center space-x-2">
            <button className="px-4 py-1 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
              Login
            </button>
            <button className="px-4 py-1 border-2 border-orange-500 text-orange-600 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Search */}
          <div className="flex items-center bg-gray-100 border border-gray-300 rounded-full py-2 px-3">
            <select className="bg-transparent text-gray-600 text-sm outline-none">
              <option>All</option>
              <option>Fruits</option>
              <option>Vegetables</option>
              <option>Snacks</option>
              <option>Drinks</option>
            </select>
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 ml-2 outline-none text-gray-800"
            />
            <FaSearch className="text-gray-600 ml-3 cursor-pointer" />
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-2 mt-2">
            <button
              onClick={() => scrollToSection(refs.aboutRef)}
              className="text-gray-700 font-medium hover:text-orange-500"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection(refs.offersRef)}
              className="text-gray-700 font-medium hover:text-orange-500"
            >
              Offers
            </button>
            <button
              onClick={() => scrollToSection(refs.reviewsRef)}
              className="text-gray-700 font-medium hover:text-orange-500"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection(refs.helpdeskRef)}
              className="text-gray-700 font-medium hover:text-orange-500"
            >
              Helpdesk
            </button>
            <button
              onClick={() => scrollToSection(refs.downloadRef)}
              className="text-gray-700 font-medium hover:text-orange-500"
            >
              Download App
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
