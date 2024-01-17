import React, { useState } from "react";
import Product from '../Product/Product.js'
import Cart from "../Cart/Cart.js";
const ProductDisplay = () => {
  const [products, setProducts] = useState([
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 200 },
    { name: "Product 3", price: 300 },
  ]);
  const [cart, setCart] = useState([]);

  const increment = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, i) => {
        if (i === index) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      return prevCart.filter((_, i) => i !== index);
    });
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          price={product.price}
          addToCart={() => addToCart(product)}
        />
      ))}
      <h2>Cart</h2>
      <Cart items={cart} removeFromCart={removeFromCart} increment={increment }/>
    </div>
  );
};

export default  ProductDisplay;
