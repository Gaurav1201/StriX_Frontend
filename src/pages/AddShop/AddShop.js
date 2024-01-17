import React, { useState } from 'react'
import './AddShop.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import { useLocalStorage } from 'react-use';

function AddShop() {

    function handleSubmit(e) {
      e.preventDefault();
      const expressApi =  axios.post("http://localhost:8000/api/register/shop",{
      shopName:shopName,
      shopLocation:shopLocation,
      ownerEmail:email,
      ownerId: localStorage.getItem('user_Id')
    }).then((responce)=>{
      console.log('shop id --',responce.data)
      setShopID(responce.data)
      console.log('state shopid--', shopId)

     // setValue(shopId)

      console.log(typeof(responce.data))
      localStorage.setItem('shopID', responce.data);
      var a = localStorage.getItem('shopID')
      console.log('locla storage',a)
      
      //console.log('locl kdj', value);
      //navigate('/AddProduct')
    })
    .catch(err => console.log(err))
   //navigate("/AddProduct")
   //63fdd5f3f8d6ed94d76b3675 - AddSHop
   //63fdd4a8f8d6ed94d76b3671 -- AddProducy
    }
    
  
    const [value, setValue, remove] = useLocalStorage('shopID', '1');
    const [productDetails, setProductDetails] = useState([]);
    const [count,setCount] = useState(1);
    const [shopName, setShopName] = useState('');
    const [shopLocation, setShopLocation] = useState('');
    const [shopId, setShopID] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState(false);
    const [detetctedLocation,setDetectedLocation] = useState(false)
    const navigate = useNavigate();
    const [components, setComponents] = useState([]);

   return (
    <>
    <div>AddShop</div>
    

    <form onSubmit={handleSubmit} className='add-shop'>
      <input onChange={(e)=>setShopName(e.target.value)} type='text' placeholder="name of the shop" />
      <input  onChange={(e)=>setShopLocation(e.target.value)}type='text' placeholder="location of the shop(city)" />
      <input  onChange={(e)=>setEmail(e.target.value)}type='email' placeholder='enter email-id' />
      <input type='submit' name='next'value='next' />
    </form>
    <p>{shopId}</p>
    <button onClick={()=> navigate('/AddProduct')}>Add Product</button>
    </>
  )
   
  };
export default AddShop