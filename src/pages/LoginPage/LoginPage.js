import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom";




/*function LoginPage(){
  const navigate = useNavigate();
  return(
    <>
    <button onClick={()=>{navigate("/ShowShops")}}>click here</button>
    <h1>Hello</h1>
    </>
  )
}*/
function LoginPage() {

  var [userName, setUserName] = useState();
  var [password, setPassword] = useState("");
  var [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    setHasError(false);
    e.preventDefault();

    const responseData = await axios.post("http://localhost:8000/api/auth/login", {
      userName: userName,
      password: password,
    })
    console.log(responseData);

    if (responseData.data.isValid == true) {
      navigate('/');
    } else {
      setHasError(true);
    }
    // .then((response) => {
    //   //alert(response.data);
    //   alert('no error');
    //   setCanNavigate(true);
    //   navigate('/');
    // })
    // .catch((error) => {
    //   console.error(error);
    //   alert('error');
    // });
    // if(canNavigate==true){navigate('/')}
    // else{alert('u cant nav')}
    // const expressApi =  axios.post("http://localhost:8000/api/auth/login",{
    //   userName : userName,
    //     password:password
    //   }).then((responce)=>{
    //     alert(responce.data)
    //     alert('no error')
    //     navigate('/')
    //     // if(responce.data=='user exists'){
    //     //   navigate('/Signup')
    //     // }
    //   }).catch((err)=>{console.log(err);alert('error')})
    //   console.log(expressApi)
  }

  return (
    <>


      <div className='LoginPage' onSubmit={handleSubmit}>
        <form className='LoginPageDivs'>
          <h1 style={{ color: "Blue" }}>Login;</h1>
          <p>{localStorage.getItem('user_Id')}</p>
          <input onChange={(e) => setUserName(e.target.value)} type="text" required placeholder='Enter userName' />
          <input onChange={(e) => setPassword(e.target.value)} type="password" required placeholder='Enter Password' />
          <button type='submit' value="Login Account">Login</button>
        </form>
        <h1>{userName} {password}</h1>
      </div>

      {hasError && (
        <div><h1>Something went wrong. Please try again later</h1>
          <span><button onClick={() => setHasError(false)}>close</button></span>
        </div>
      )}

    </>
  );
}

export default LoginPage