import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import ProductDisplay from '../../components/Products/ProductDisplay';
function Shop() {

  const { id } = useParams();
  const [shopID, setShopID] = useState(id);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([{}]);
  const [shopDetails, setShopDetails] = useState({ ShopName: 'MacDonalds', ShopDescription: 'A fast food restaurant with a weired looking clown ' });
  const [cart, setCart] = useState({});

  // const AddToCart = (element) =>{
  //   console.log('cart ', element)
  //   setCart([...cart, element])
  // }

  const AddToCart = (element) => {
    // Assuming element has an "_id" property for identifying the product
    const productId = element._id;

    setCart((prevCart) => {
      // If the product is not in the cart, add it with a quantity of 1
      if (!prevCart[productId]) {
        return { ...prevCart, [productId]: 1 };
      }

      // If the product is already in the cart, do not modify the quantity
      return prevCart;
    });
  };

  const removeFromCart = (_id) => {
    setCart(cart.filter((item) => item._id !== _id));
  }


  const incrementProduct = (productId) => {
    setCart((prevCart) => {
      // If the product is in the cart, increment its quantity
      if (prevCart[productId]) {
        return { ...prevCart, [productId]: prevCart[productId] + 1 };
      }
  
      // If the product is not in the cart, add it with a quantity of 1
      return { ...prevCart, [productId]: 1 };
    });
  };
  
  const decrementProduct = (productId) => {
    setCart((prevCart) => {
      // If the product is in the cart and the quantity is greater than 1, decrement its quantity
      if (prevCart[productId] && prevCart[productId] > 1) {
        return { ...prevCart, [productId]: prevCart[productId] - 1 };
      }
  
      // If the product is in the cart and the quantity is 1, remove it from the cart
      if (prevCart[productId] === 1) {
        const { [productId]: _, ...rest } = prevCart;
        return rest;
      }
  
      // If the product is not in the cart, do nothing
      return prevCart;
    });
  };
  
  const saveCart = () => {
    console.log('shop id', id)
    axios.get(`http://localhost:8000/api/shops/getdetails/${id}`)
      .then(response => {
        setShopDetails(response.data)
        setProducts(response.data.products)
        console.log(products)
        console.log(shopDetails)
        setLoading(false)
      })
      .catch(error => {
        console.error(error);
      });
  }

  const fetchData = () => {
    console.log('shop id', id)
    axios.get(`http://localhost:8000/api/shops/getdetails/${id}`)
      .then(response => {
        setShopDetails(response.data)
        setProducts(response.data.products)
        console.log(products)
        console.log(shopDetails)
        setLoading(false)
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchData();

  }, []);
  return (
    <div style={{ "display": "flex" }}>

      <div>
        <h1>Shop</h1>

        <div>
          <p>Shop ID is {id}</p>
        </div>

        <div className='Banner'>
          <h1>{shopDetails.ShopName}</h1>
          <p>{shopDetails.shopLocation}</p>
        </div>

        <div>
          <button onClick = {saveCart}>Buy</button>
        </div>

        <ul>
          {
            products.map((element) => (
              <ProductDisplay key={element._id} element={element} AddToCart={AddToCart} removeFromCart={removeFromCart} incrementProduct={incrementProduct} decrementProduct={decrementProduct} />
            ))
          }
        </ul>
      </div>
      <div>
        <p>CART Elements</p>
        <ul>
          {
            cart.map((element) => (
              <div>
                <p>{element._id}</p>
              </div>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
export default Shop

