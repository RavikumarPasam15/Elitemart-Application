import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-3">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Info */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-orange-400">EliteMart</h3>
          <ul className="space-y-2 text-gray-300">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-orange-400">Customer Service</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Contact Us</li>
            <li>Returns</li>
            <li>Shipping Info</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-orange-400">My Account</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Order History</li>
            <li>Wishlist</li>
            <li>Track Order</li>
          </ul>
        </div>

        {/* Socials & Payments */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-orange-400">Follow Us</h3>
          <div className="flex space-x-4 text-2xl mb-4">
            <FaFacebook className="hover:text-orange-400 transition" />
            <FaInstagram className="hover:text-orange-400 transition" />
            <FaTwitter className="hover:text-orange-400 transition" />
            <FaPinterest className="hover:text-orange-400 transition" />
          </div>

          <p className="text-gray-300 mb-2">Accepted Payments:</p>
          <div className="flex space-x-2">
            <span className="border border-gray-500 px-3 py-1 text-sm rounded-md">Visa</span>
            <span className="border border-gray-500 px-3 py-1 text-sm rounded-md">MasterCard</span>
            <span className="border border-gray-500 px-3 py-1 text-sm rounded-md">PayPal</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 text-center text-gray-400 text-sm py-4">
        © 2025 <span className="text-orange-400 font-semibold">EliteMart</span>. All Rights Reserved | Privacy Policy | Terms & Conditions
      </div>
    </footer>
  );
};

export default Footer;
