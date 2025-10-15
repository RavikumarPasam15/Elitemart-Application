import React from "react";
import backgroundImg from "../../../assets/images/marrt.jpeg";
import { FaTruck, FaShieldAlt, FaHeadset, FaGift } from "react-icons/fa";

const About = () => {
  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden py-20 px-6">

      {/* Floating Circles for Decoration */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-orange-300/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-3 xl md:text-4xl font-extrabold text-gray-900 mb-4">
          About <span className="text-orange-500">EliteMart</span>
        </h2>
        <p className="text-gray-900 max-w-2xl mx-auto text-lg leading-relaxed">
          Discover the perfect shopping experience — trusted by thousands of happy customers every day.
        </p>
      </div>

      {/* About Card */}
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition hover:scale-[1.01] duration-500">

        {/* Left Content */}
        <div className="md:w-1/2 p-10 lg:p-14 flex flex-col justify-center space-y-6">
          <h3 className="text-4xl font-bold text-gray-900">Shop Smarter with EliteMart</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            EliteMart is your trusted online shopping destination — offering a vast range of fashion, electronics,
            groceries, and more at unbeatable prices. We’re redefining convenience by bringing everything you need
            right to your doorstep.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            From lightning-fast delivery to secure payments and 24/7 support, our goal is to make your shopping
            journey simple, safe, and satisfying.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-6">
            <div className="text-center">
              <span className="text-3xl font-bold text-orange-400">500+</span>
              <p className="text-gray-600 text-sm">Products</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-orange-400">10k+</span>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-orange-400">24/7</span>
              <p className="text-gray-600 text-sm">Support</p>
            </div>
          </div>

          <button className="mt-8 w-48 bg-orange-400 hover:bg-orange-400 text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Shopping
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
          <img
            src={backgroundImg}
            alt="EliteMart Store"
            className="w-full h-full object-cover transform hover:scale-110 transition duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full max-w-6xl mt-24">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Why <span className="text-orange-500">Choose Us?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Feature Card */}
          {[
            { icon: <FaTruck />, title: "Fast Delivery", desc: "Swift and reliable delivery right to your door." },
            { icon: <FaShieldAlt />, title: "Secure Payments", desc: "100% safe and encrypted transactions." },
            { icon: <FaHeadset />, title: "24/7 Support", desc: "Always available to assist your needs." },
            { icon: <FaGift />, title: "Exclusive Offers", desc: "Unbeatable deals and seasonal discounts." },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 ease-in-out"
            >
              <div className="text-5xl text-orange-500 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
