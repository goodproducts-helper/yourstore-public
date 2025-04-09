import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <header>
        <h1>Welcome to Your Store</h1>
        <Cart cart={cart} />
      </header>
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default App;
