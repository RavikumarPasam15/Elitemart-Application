// components/customer/Checkout.jsx
import React, { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Shipping Info */}
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-semibold mb-3">Shipping Details</h3>

          <div className="mb-3">
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border w-full p-2 rounded"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-3">
            <label className="block font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border w-full p-2 rounded"
              placeholder="Enter your address"
            />
          </div>

          <div className="mb-3">
            <label className="block font-medium mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="border w-full p-2 rounded"
              placeholder="City"
            />
          </div>

          <div className="mb-3 grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="border w-full p-2 rounded"
                placeholder="State"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                className="border w-full p-2 rounded"
                placeholder="Pincode"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="border w-full p-2 rounded"
            >
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI Payment</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
          >
            Place Order
          </button>
        </form>

        {/* Right: Order Summary */}
        <div className="bg-gray-50 p-4 rounded shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Order Summary</h3>

          <div className="border-b pb-2 mb-2">
            <p className="flex justify-between">
              <span>Subtotal:</span> <span>₹ 1200</span>
            </p>
            <p className="flex justify-between">
              <span>Shipping:</span> <span>₹ 50</span>
            </p>
          </div>

          <p className="flex justify-between font-bold text-lg">
            <span>Total:</span> <span>₹ 1250</span>
          </p>

          <div className="mt-4 text-gray-600 text-sm">
            <p>Estimated delivery: 3–5 business days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
