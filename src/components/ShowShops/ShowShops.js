import React, { useState,useEffect } from 'react';
import './ShowShops.css'; 
import { Link } from "react-router-dom";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";


const listOfShops = [{id:1,name:'Name1'},{id:2,name:'name2'}]
 


const ShowShops = (props) => {
    
    useEffect(() => {
        alert('khd')
        console.log(shopType1)
        axios.get('http://localhost:8080/getShops',{
            params:{
                shopType : "shopType1"
            }
        })
       .then(response => {
        setList(response.data)
         })
        .catch(error => {
       console.error(error);
    });
    console.log(list)
    }, []);
    const {state} = useLocation();
    //const shopType = useParams()
    //const shopType = props.location.state.shopType;
    const [shopType1,setShopType] = useState(state.shopType);
    const [list,setList] = useState([])
    return(
<>
       
      <h1>Shoplist {shopType1}</h1>
      <ul> 
        {list.map((element)  => (
            <div key = {element.id}style={{ backgroundColor:'red'}}>
                <Link to={`/Shop/${element.id}`}>
                    <h1>{element.BusinessType}</h1>
                </Link>
                <div>{element.id}</div>
                <h1  onClick={console.log('the unique is '+ element.id)}>shop name is</h1>
            </div>
))}
    </ul>
       
</>
    )
}
export default ShowShops

  