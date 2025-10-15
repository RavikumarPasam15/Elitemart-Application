// src/pages/customer/Home.jsx
import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../Contexts/ProductContext";

const Home = () => {
  const { products, setProducts } = useContext(ProductContext);

  // Fetch products once when the component mounts
  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // Example API
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [setProducts]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

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
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
