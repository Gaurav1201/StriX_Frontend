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
      shopCords:location, // coordinates of the shop
      shopDesrption:shopDesrption,
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

    function detectLocation(){
        
      navigator.geolocation.getCurrentPosition(position => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          console.log(position.coords.latitude);
        });
        
        setDetectedLocation(true)
  } 
    
  
    const [value, setValue, remove] = useLocalStorage('shopID', '1');
    const [productDetails, setProductDetails] = useState([]);
    const [count,setCount] = useState(1);
    const [shopName, setShopName] = useState('');
    const [shopLocation, setShopLocation] = useState('');
    const [shopId, setShopID] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState(false);
    const [detetctedLocation,setDetectedLocation] = useState(false);
    const navigate = useNavigate();
    const [components, setComponents] = useState([]);
    const [shopDesrption, setShopDesrption] = useState("The shop speaks for itself ;)");

   return (
    <>
    <div>ADD YOUR SHOP</div>
    

    <form onSubmit={handleSubmit} className='add-shop'>
      <input onChange={(e)=>setShopName(e.target.value)} type='text' placeholder="name of the shop" />
      <input  onChange={(e)=>setShopLocation(e.target.value)}type='text' placeholder="location of the shop(city)" /><span> <button onClick={ ()=>detectLocation()}>Auto Detect</button> <h6> {detectedLocation ? <div>  Latitude: {location.lat} Longitude: {location.lng} </div>: ""}</h6></span>
      <input  onChange={(e)=>setEmail(e.target.value)}type='email' placeholder='enter email-id' />
      <input  onChange={(e)=>setShopDesrption(e.target.value)}type='text' maxlength="100" placeholder='Tell us about your business' />

      <input type='submit' name='next'value='next' />
    </form>
    <p>Generated Shop ID: {shopId}</p>
    <button onClick={()=> navigate('/AddProduct')}>Add Product</button>
    </>
  )
   
  };
export default AddShop