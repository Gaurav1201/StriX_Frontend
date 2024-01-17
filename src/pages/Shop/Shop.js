import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import ProductDisplay from '../../components/Products/ProductDisplay';
 function Shop() {

    const { id } = useParams();
    const [shopID,setShopID] = useState(id);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([{}]);
    const [shopDetails, setShopDetails] = useState({ShopName:'MacDonalds',ShopDescription:'A fast food restaurant with a weired looking clown '});
    const [cart, setCart] = useState([]);

    const AddToCart = (element) =>{
      console.log('cart ', element)
      setCart([...cart, element])
    }

    const removeFromCart =(_id)=>{
      setCart(cart.filter((item) => item._id !== _id));
    }
    const fetchData = () =>{
      console.log('shop id',id)
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
    <div style={{"display":"flex"}}>
  
    <div>
      <h1>Shop</h1>

    <div>
      <p>Shop ID is {id}</p>
    </div>
    
    <div className='Banner'>
      <h1>{shopDetails.shopName}</h1>
      <p>{shopDetails.shopLocation}</p>
    </div>
   
    <ul>
      {
        products.map((element)=>(
          <ProductDisplay key={element._id} element={element} AddToCart={AddToCart} removeFromCart={removeFromCart}/>
        ))
      }
    </ul>
    </div>
<div>
      <p>CART Elements</p>
    <ul>
      {
        cart.map((element)=>(
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

 