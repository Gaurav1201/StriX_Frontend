
import React, { useState } from 'react';
import './SignInpageStyle.css'; 
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  var [firstName,setFirstName] = useState("");
  var [lastName, setLastName] = useState("");
  var [phoneNumber, setPhoneNumber]=useState(0);
  var [email,setEmail] = useState("");
  var [password,setPassword] = useState("");
  var [password2,setPassword2] = useState("");
  

  //handle function

    function handleSubmit(e){
    e.preventDefault();
    console.log("handelsubmiyy")
    if(password===password2){ 
    console.log("HI")
    
    const expressApi =  axios.post("http://localhost:8080/signin",{
      firstName:firstName,
      lastName:lastName,
      phoneNumber:phoneNumber,
      email:email,
      password:password
    }) 
    console.log(expressApi)
    navigate("/Login")
   
   
  }
    }

  return(
    <>
    <div className='signInForm' onSubmit={handleSubmit}>
      <form className='signInFormDivs'>
        <h1 style={{color:"Blue",position:'relative',bottom:'10px'}}>Sign Up</h1>
        <h1 style={{color:"aqua"}}>Hello {firstName}</h1>
        <input onChange={(e)=>setFirstName(e.target.value)} name="firstName" type="text" required placeholder='Enter First Name'/>
        <input onChange={(e)=>setLastName(e.target.value)} name="lastName" type="text" required={false} placeholder='Enter Last Name'/>
        <input onChange={(e)=>setPhoneNumber(e.target.value)} type="number" required placeholder='Enter Mobile Number'/>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder='Enter Email-Id'/>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" required placeholder='Enter Password'/>
        <input onChange={(e)=>setPassword2(e.target.value)} type="password" required placeholder='Confirm Password'/>
        <button type='submit' value="Create Account">Create Account</button>
        <p style={{color:"blue"}}>Already have an account?<a href='#'>Login</a></p>
      </form>

    </div>

    </>
  );
}



export default SignInPage ;

//  const responce = await axios.get("https://api.randomuser.me/")
     
    //  console.log(responce)
    //  console.log(responce.data.results[0].name.first)
    //  setapiname(responce.data.results[0].name.first)

    // const expressApi = await axios.post
    // setapiname(responce.data.first_name)
     //alert("fnlj")
      /* axios.post("http://localhost:8080/signUp",{
        method:"post",
        firstName:firstName
        ,
        lastName:lastName,
        phoneNumber:phoneNumber,
        email:email,
        password:password
      })*/
      /*class SignInPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          userName :'',
          password : '',
          password2:'',
          emailId : '',
            passowrdmatch:true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.axioscall = this.axioscall.bind(this);
       // this.handleForm = this.handleForm.bind(this);
       var postobject = {name : "hello"}
    }
  
    handleSubmit(event){
      event.preventDefault() ;
    
      if(this.state.password === this.state.password2){
        this.state.passowrdmatch = true;
        console.log(this.state.userName);
        //axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
            //setPost(response.data);
            //console.log(response.data);
         // });
       //this.postobject.name = this.state.userName ;
      }

      else{
        alert("password does not match")
        this.setState({passowrdmatch:false})
      }

    }

    handleChange(event)
    {
      var eventname = event.target.name ;
      console.log(eventname + " " + event.target.value);
      this.setState({[eventname]: event.target.value});
    }

    /*axioscall(){
        let axiosstr = "https://jsonplaceholder.typicode.com/posts/1";
        axios.post("http://localhost:8000",{
            name : this.state.userName,
            email : this.state.emailId,
            phone: 1234
        }).then((response) => {
            console.log(response.data);
        })
        .catch((err)=>{console.log(err.response)});

    }*/
    /*axioscall(){
        let axiosstr = "https://jsonplaceholder.typicode.com/posts/1";
        //console.log(this.postobject['name']+"-------post name")
        axios.post("http://localhost:8000",{
            name: 'hello'
        }).then((response) => {
            console.log(response.data);
        })
        .catch((err)=>{console.log(err.response)});

    }
    render(){
     return (
    <div className='signupform'>
      
      <form onSubmit={this.handleSubmit} >
      <div className='signupformdetails'>
      
      <div><p>SIGN UP</p></div>
      <div>
       
       <input required name='userName'onChange={this.handleChange} type='text' placeholder='enter your name'></input>
      
      </div>
     
      <div>
       
       
       <input required name='emailId'onChange={this.handleChange} type='text' placeholder='enter your email'></input>
     
      </div>
     
      <div>
      
      <input required name='password'onChange={this.handleChange} type='password' placeholder='enter the password'></input></div>
      <div>
      
      <input required name='password2'onChange={this.handleChange}  type='password' placeholder='confirm the password'></input>
      
      
      </div>
      <div><button style={{ color:'blue'}}type='submit'>Sign In</button></div>
      
      
      </div>

      
      </form>
      
      <div>
     <button onClick={this.axioscall}>AXIOS</button>
      {this.state.passowrdmatch ? console.log("") : <div style={{color:"green", position:'absolute', top:40,}}>password doesnt match</div>}
    </div>
    
    </div>
    
  );
    }
}*/
