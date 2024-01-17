import React, { useState } from "react";

const Product = ({ name, price, addToCart, increment }) => (
  <div>
    <p>{name}</p>
    <p>{price}</p>
    <button onClick={addToCart}>Add to Cart</button>
    <button onClick={increment}>+</button>
  </div>
);

export default Product