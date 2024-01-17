
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './DashBoard.css'
import { useNavigate } from "react-router-dom";
import {Typography} from '@mui/material';
import { Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';


import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const DashBoard = () => {

  const [location, setLocation] = useState('udupi');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () =>{

    navigate('/ShowShops', {state : {location:location, searchTerm : searchTerm}})
    // axios.post('http://localhost:8000/api/shops/getShops',{
    //   location : location,
    //   searchTerm : searchTerm
    // }).then((responce)=>{
    //   navigate('/ShowShops', { state: { data : responce.data } });
    // })
  
  }

  return (

    
    
    <nav className='navbar'>
      <Typography varient='h6'>Strix-Local Business Finder</Typography> 
         <div>
        <input onChange={(e)=>setLocation(e.target.value)} type='text' placeholder='enter location'></input>
        <input onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder='enter business name'></input>
        <input onClick={()=>handleSubmit()} type='submit'></input>
      </div>

      
      <ul>
        <li><Link to="/Signup">Sign Up</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
      </ul>
    </nav>
    
  );
}

export default DashBoard;



