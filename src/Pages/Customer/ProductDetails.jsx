import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-700 mb-4">
        Product Details (ID: {id})
      </h2>
      <p>More product details will go here...</p>
    </div>
  );
};

export default ProductDetail;
