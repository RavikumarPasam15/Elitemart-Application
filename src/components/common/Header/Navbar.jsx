import React, { useState } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Beauty",
    "Sports",
    "Toys",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md gap-20 shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2  cursor-pointer">
          <h1 className="text-2xl font-bold text-gray-900 pr-20">Elitemart</h1>
        </div>

        {/* Center: Search Bar (hidden on mobile) */}
        <div className="hidden md:flex flex-1 mx-6 relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white transition duration-300"
          />
          <button className="absolute right-1 top-1 bottom-1 px-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition duration-300 flex items-center justify-center ml-20">
            <FaSearch size={18} />
          </button>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-8 relative">
          {/* Categories */}
          <div
            className="relative cursor-pointer font-medium hover:text-blue-600 transition-colors duration-300"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            Categories ▼
            {showCategories && (
              <div className="absolute top-full mt-2 w-44 bg-white border border-gray-100 rounded-lg shadow-lg z-50">
                {categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                  >
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Wishlist */}
          <FaHeart
            size={22}
            className="cursor-pointer hover:text-pink-500 transition-colors duration-300"
          />

          {/* Cart */}
          <div className="relative cursor-pointer hover:text-green-500 transition-colors duration-300">
            <FaShoppingCart size={22} />
          </div>

          {/* Profile Icon - Opens on Hover */}
          <div
            className="relative"
            onMouseEnter={() => setShowProfileMenu(true)}
            onMouseLeave={() => setShowProfileMenu(false)}
          >
            <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition-all duration-300">
              <FaUser size={18} className="text-gray-700" />
            </div>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg text-gray-800 text-sm">
                <div className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition">
                  My Account
                </div>
                <div className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition">
                  Login
                </div>
                <div className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition">
                  Signup
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm text-gray-800 w-full px-6 py-4 space-y-4 border-t border-gray-200 animate-slideDown shadow-inner">
          {/* Search Bar */}
          <div className="flex">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-full text-white hover:bg-blue-700 transition duration-300">
              <FaSearch />
            </button>
          </div>

          {/* Categories */}
          <div className="space-y-2">
            <div className="font-semibold text-blue-700">Categories</div>
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="pl-2 py-1 hover:bg-blue-100 rounded transition-colors duration-200 cursor-pointer"
              >
                {cat}
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6 mt-4">
            <FaHeart
              size={20}
              className="hover:text-pink-500 cursor-pointer transition-colors duration-300"
            />
            <div className="relative hover:text-green-500 cursor-pointer transition-colors duration-300">
              <FaShoppingCart size={20} />
            </div>
            {/* Profile for Mobile */}
            <div
              className="relative"
              onMouseEnter={() => setShowProfileMenu(true)}
              onMouseLeave={() => setShowProfileMenu(false)}
            >
              <div className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition-all duration-300">
                <FaUser size={18} className="text-gray-700" />
              </div>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg text-gray-800 text-sm">
                  <div className="px-3 py-2 hover:bg-blue-50 cursor-pointer transition">
                    My Account
                  </div>
                  <div className="px-3 py-2 hover:bg-blue-50 cursor-pointer transition">
                    Login
                  </div>
                  <div className="px-3 py-2 hover:bg-blue-50 cursor-pointer transition">
                    Signup
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
