import React from 'react'
import { useState, useEffect } from 'react';
import './LandingPage.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import DashBoard from '../DashBoard/DashBoard';
import { Typography } from '@mui/material';
import MUIShop from '../../components/MUIShops/MUIShops';

function LandingPage() {
    const Business = [

        {
            "id":1,
            "BusinessType":"food",
            "location":"california",
            "BusinessName":"pizza hut",
            "rating":5,
        },
        {
            "id":2,
            "BusinessType":"food",
            "location":"california",
            "BusinessName":"MacDonalds",
            "rating":5,
        }
        , 
        {
            "id":3,
            "BusinessType":"food",
            "location":"california",
            "BusinessName":"MacDonalds",
            "rating":5,
        }
        
        ]
    const [businessList, setBusinessList] = useState(Business);
    const [searchTerm, setSearchTerm] = useState('local');
  
    useEffect(() => {
      fetch('http://localhost:8000/api/shops/shopList')
        .then(response => response.json())
        .then(data => setBusinessList(data));
    }, []);

  return (
    <>
   
    <div className="App">
      <div className="horizontal-list">
      <ul>
        {businessList.map((element,index) => (
          <MUIShop key={index} element={element} />
      //     <div className='list-element' key = {element._id}style={{ backgroundColor:'red'}}>
      //       <Link to={`/Shop/${element._id}`}>
      //         <Typography variant='h4' >{element.shopName}</Typography>
      //       </Link>
      //     {/* <div>{element.id}</div> */}
      //     <Typography  onClick={console.log('the unique is '+ element._id)}>shop name is {element.shopName}</Typography>
      // </div>
        
        ))}
      </ul>
    </div>  
    
      <footer className="App-footer">
        <p>&copy; Your Company Name</p>
      </footer>
    </div>
    </>
  )
}

export default LandingPage