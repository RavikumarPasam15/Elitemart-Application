// components/customer/OrderTracking.jsx
import React, { useState } from "react";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();

    // Demo static tracking data
    const demoStatus = {
      "ORD123": "Order Confirmed",
      "ORD124": "Shipped",
      "ORD125": "Out for Delivery",
      "ORD126": "Delivered",
    };

    setStatus(demoStatus[orderId.toUpperCase()] || "Order Not Found");
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Track Your Order</h2>

      <form onSubmit={handleTrack} className="mb-6">
        <label className="block font-medium mb-2">Enter Order ID</label>
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="e.g., ORD123"
          className="border w-full md:w-1/2 p-2 rounded mb-3"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
        >
          Track Order
        </button>
      </form>

      {status && (
        <div className="mt-4 bg-gray-100 p-4 rounded border">
          <h3 className="text-lg font-semibold">Tracking Result</h3>
          <p className="mt-2 text-gray-800">Status: {status}</p>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
