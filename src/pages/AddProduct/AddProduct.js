import React, { useState } from 'react'
import axios from 'axios';
import './AddProduct.css'
import { useLocalStorage } from 'react-use';
//import { response } from 'express';
import {useNavigate} from "react-router-dom"

const AddProduct = (props) => {
   
  function Addstock(){
    var stock1 = stock + 1;
    setStock(stock1)
    
    }
    const SaveProduct = () =>{

      const data = axios.post('http://localhost:8000/api/shops/addProduct',{
        shopId: localStorage.getItem('shopID'),
        productName : productName,
        productPrice : productPrice,
        productStock : stock,
        productDescription : pDescription
      }).then((response)=>{navigate('/Signup')})
    }

    const [stock, setStock] = useState(1);
    const [productName, setProductName] = useState('');
    const [pDescription, setPDescription] = useState();
    const [productPrice, setProductPrice] = useState(1);
    const navigate = useNavigate();
    return (
    <>
    <div>AddProduct</div>
    <h1>{props.id}</h1>
    <p>{localStorage.getItem('shopID')}</p>
    <div className='product-details'>
      <form onSubmit={()=> SaveProduct()}>
        <input onChange={(e)=>setProductName(e.target.value)}placeholder = 'enter name'type='text'/>
        <input onChange={(e)=>setPDescription(e.target.value)}placeholder='enter description'/>

        <input onChange={(e)=>setProductPrice(e.target.value)}type='number' placeholder='price' />
        <input type  ='number' placeholder='stonk' value={stock}/>
        <button onClick={()=>Addstock()}>Add Stock</button>
        <h1>skdh</h1>
        <input type='submit' />
        </form>
        {/* //</div>p>{}</p>
        {localStorage.getItem('shopID') && (
            <div>
               Password: <p>{localStorage.getItem('shopID')}</p>
            </div>
         )}
    </div> */}
    </div>
    </>
  )
}

export default AddProduct