// src/pages/customer/ProductList.jsx
import React, { useContext } from "react";
import { ProductContext } from "../../Contexts/ProductContext";

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain mb-2"
              />
              <h2 className="font-semibold text-sm mb-1">
                {product.title.substring(0, 30)}...
              </h2>
              <p className="text-gray-700 font-bold">${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
