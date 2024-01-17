import React, { useState,useEffect } from 'react';
import './ShowShops.css'; 
import { Link } from "react-router-dom";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MUIShop from '../../components/MUIShops/MUIShops';

const listOfShops = [{id:1,name:'Name1'},{id:2,name:'name2'}]
 
const ShowShops = (props) => {
    
    // const fetchfghData = () =>{
        
    //     console.log(shopType1)

    //     axios.get('http://localhost:8080/getShops',{
    //         params:{
    //             shopType : "shopType1"
    //         }
    //     })
    //    .then(response => {
    //     setList(response.data)
    //      })
    //     .catch(error => {
    //    console.error(error);
    // });

    // console.log(list)
    // }

    const fetchData = () => {
        console.log('sehop lists')
        var findTag = false
        // if(searchTerm[0]=='@'){
        //     findTag = true;
        // }
        const list = axios.get('http://localhost:8000/api/shops/shopList',{
            //location : location,
           // searchTerm : searchTerm,
           // findbyTag : findTag
        })
        .then((responce)=>{
            console.log(responce.data)
            setList(responce.data)
        })
        .catch(error=>{
            console.log(error)
        })

    }

    useEffect(() => {
        fetchData();
        //alert('khd')
    //     console.log(shopType1)
    //     axios.get('http://localhost:8080/getShops',{
    //         params:{
    //             shopType : "shopType1"
    //         }
    //     })
    //    .then(response => {
    //     setList(response.data)
    //      })
    //     .catch(error => {
    //    console.error(error);
    // });
    // console.log(list)
    }, []);
    
    const {state} = useLocation();
    //const shopType = useParams()
    //const shopType = props.location.state.shopType;
    //const [shopType1,setShopType] = useState(state.shopType);
    const [list,setList] = useState([])
    //const [location, setLocation] = useState(state.location);
   // const [searchTerm, setSearchTerm] = useState(state.searchTerm)
    return(
    <>
       
      {/* <h1>Shoplist {shopType1}</h1> */}
      <div style={{'display':'flex','gap':10, 'justifyContent':'center'}}>
      <ul> 
        {list.map((element,index)  => (
            
            <MUIShop key ={index} element={element} />
            // <div key = {element._id}style={{ backgroundColor:'red'}}>
            //     <Link to={`/Shop/${element._id}`}>
            //         <h1>{element.shopName}</h1>
            //     </Link>
            //     <div>{element.id}</div>
            //     <h1  onClick={console.log('the unique is '+ element._id)}>shop name is {element.shopName}</h1>
            // </div>
))}
    </ul>
</div>
{/* <ul>  */}
        {/* {list.map((element)  => (
             <div key = {element.id} className="product-display">
             <div className="product-display-image">
               <img src={element.image} alt={element.Businessname} />
             </div>
             <div className="product-display-info">
             <Link to={`/Shop/${element.id}`}>
                    <h1>{element.Businessname}</h1>
                </Link>
               <p className="product-display-description">{element.location}</p>
               <p className="product-display-price">${element.rating}</p>
               <button className="product-display-button">View Shop</button>
             </div>
           </div>
))}
    </ul> */}
       
    </>
)
}
export default ShowShops

  