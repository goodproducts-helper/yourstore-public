import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Gym Stringer Vest", price: 19.99 },
  { id: 2, name: "Star Master Projection Lamp", price: 39.99 },
  // Add more products here
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
