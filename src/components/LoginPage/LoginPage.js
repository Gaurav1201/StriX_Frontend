import React, { useState } from 'react';
import './LoginPage.css'; 
import axios from 'axios'
import {useNavigate} from "react-router-dom"




/*function LoginPage(){
  const navigate = useNavigate();
  return(
    <>
    <button onClick={()=>{navigate("/ShowShops")}}>click here</button>
    <h1>Hello</h1>
    </>
  )
}*/
function LoginPage(){
  var [firstName,setFirstName] = useState("");
  var [lastName, setLastName] = useState("");
  var [phoneNumber, setPhoneNumber]=useState(0);
  var [email,setEmail] = useState("");
  var [password,setPassword] = useState("");
  var [password2,setPassword2] = useState("");

  function handleSubmit(){
    const expressApi =  axios.post("http://localhost:8080/login",{
        phoneNumber:phoneNumber,
        password:password
      })  
  }
    return(
        <>
    <div className='LoginPage' onSubmit={handleSubmit}>
      <form className='LoginPageDivs'>
        <h1 style={{color:"Blue"}}>Login</h1>
        <input onChange={(e)=>setPhoneNumber(e.target.value)} type="number" required placeholder='Enter Mobile Number'/>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" required placeholder='Enter Password'/>
        <button type='submit' value="Create Account">Login</button>
      </form>
    </div>
        </>
    );
}

export default LoginPage