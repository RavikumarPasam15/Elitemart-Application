import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

const Download = () => {
  return (
    <div className="flex flex-col items-center py-16 px-4 text-black">
      {/* Section Title */}
      <h1 className="text-3 xl md:text-4xl font-extrabold text-orange-500 mb-6 text-center">
        Download App
      </h1>
      <p className="text-black-300 font-bold text-center max-w-xl mb-8 text-lg">
        Download our mobile app for faster shopping, order tracking, and exclusive app-only deals.
      </p>

      {/* Download Buttons */}
      <div className="flex flex-col items-center w-full max-w-md space-y-5">
        {/* Play Store */}
        <a
          href="#"
          className="flex items-center justify-center space-x-4 w-full bg-black hover:bg-gray-900 transform hover:scale-105 transition duration-300 text-white px-8 py-5 rounded-3xl text-xl font-semibold shadow-lg"
        >
          <IoLogoGooglePlaystore className="text-3xl" />
          <span>Download from Play Store</span>
        </a>

        {/* iOS */}
        <a
          href="#"
          className="flex items-center justify-center space-x-4 w-full bg-black hover:bg-gray-900 transform hover:scale-105 transition duration-300 text-white px-8 py-5 rounded-3xl text-xl font-semibold shadow-lg"
        >
          <FaApple className="text-3xl" />
          <span>Download for iOS</span>
        </a>
      </div>

      {/* Version Info */}
      <p className="text-black-400 text-sm text-center mt-6">
        Play Store: v2.3.1 &nbsp; | &nbsp; iOS: v2.3.1
      </p>
    </div>
  );
};

export default Download;
