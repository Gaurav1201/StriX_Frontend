import React, { useState } from 'react';
import './SearchShops.css'; 
import { useNavigate, useHistory } from "react-router-dom";
function SearchShops(){

    function handleSubmit(e){
       e.preventDefault();
       console.log(shopType)
    //    navigate(
    //     '/ShowShops',
    //     {
    //       state: {
    //         shopType
    //       }
    //     }})
       //navigate(`/ShowShops/${shopType}`)
       navigate('/ShowShops', { state: { shopType } });
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
    
    const navigate = useNavigate();
    const [shopType, setShopType] = useState("");
    const [location, setLocation] = useState({});
    const [detectedLocation, setDetectedLocation] = useState(false);
    return(
<>
     <form onSubmit={handleSubmit}>
        {/* <input type='search' placeholder='Enter Location'/> */}
        <input onChange={(e)=>setShopType(e.target.value)} requried="true" type='text' placeholder='enter the type of shop which you want to find'/>
        <input type="submit"/>
    </form>

   {detectedLocation ? <div>  Latitude: {location.lat} Longitude: {location.lng} </div>: ""}
    
    <div >
            <h1>Would You Like to auto detect Your Location?</h1>
            <button onClick={ ()=>detectLocation()}>Auto Detect</button>
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        
        </>
    )
}

export default SearchShops