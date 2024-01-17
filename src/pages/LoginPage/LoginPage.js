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
  
  var [userName, setUserName]=useState();
  var [password,setPassword] = useState("");
  

  function handleSubmit(e){
   alert('kml/l')
    const expressApi =  axios.post("http://localhost:8000/api/auth/login",{
      userName : userName,
        password:password
      }).then((responce)=>{
        console.log(responce.data)
        navigate('/')
        // if(responce.data=='user exists'){
        //   navigate('/Signup')
        // }
      }).catch((err)=>{console.log(err)})
      console.log(expressApi)
  }
  const navigate = useNavigate();
    return(
        <>
    <div className='LoginPage' onSubmit={()=>handleSubmit()}>
      <form className='LoginPageDivs'>
        <h1 style={{color:"Blue"}}>Login</h1>
        <p>{localStorage.getItem('user_Id')}</p>
        <input onChange={(e)=>setUserName(e.target.value)} type="text" required placeholder='Enter userName'/>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" required placeholder='Enter Password'/>
        <button type='submit' value="Create Account">Login</button>
      </form>
      <h1>{userName} {password}</h1>
    </div>
        </>
    );
}

export default LoginPage