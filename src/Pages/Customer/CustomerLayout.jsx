// components/customer/CustomerLayout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaHome, FaUser, FaShoppingCart, FaHeart, FaBox } from "react-icons/fa";

const CustomerLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">
          <Link to="/">ShopEasy</Link>
        </h1>

        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:text-green-600 font-medium">
            Home
          </Link>
          <Link to="/product-list" className="hover:text-green-600 font-medium">
            Products
          </Link>
          <Link to="/orders" className="hover:text-green-600 font-medium">
            Orders
          </Link>
          <Link to="/wishlist" className="hover:text-green-600 font-medium">
            Wishlist
          </Link>
          <Link to="/cart" className="hover:text-green-600 font-medium">
            Cart
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        © {new Date().getFullYear()} ShopEasy. All Rights Reserved.
      </footer>
    </div>
  );
};

export default CustomerLayout;
