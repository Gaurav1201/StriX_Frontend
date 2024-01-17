import React, { useEffect, useState } from 'react';

import axios from 'axios'
import { useNavigate } from "react-router-dom";

const JSONDEMO = () =>{

    var [jsonList , setList] = useState([]);
    const fetchData = ()=>{
        axios.get('https://dummyjson.com/carts').then((response) => {
            setList(response.data.carts)

    })
    }
    useEffect(() => {
        fetchData();
      
        }, []);

        const handleCLick = (id)=>{
            console.log()
            var data = axios.get("https://dummyjson.com/products/"+id).then((responce)=>{
                console.log(responce.data)
            })
            console.log(data);
        }
    return(
        <>

{
    jsonList.map((element, index)=>(
    <>
        <div>
            <h1>ID = {element.id}</h1>
           <table>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>price</th>
                <th>quantity</th>
                <th>total</th>  
                <th>discountPercentage</th>
                <th>discountedPrice</th>
               <th> thumbnail</th>
            </tr>
            {
                element.products.map((element1, index)=>{
                    return <tr>
                        <td>
                            {element1.id}
                        </td>
                         <td onClick={()=>handleCLick(element1.id)}>
                            {element1.title}
                        </td>
                        <td>
                            {element1.price}
                        </td> 
                        <td>
                            {element1.quantity}
                        </td>
                        <td>
                            {element1.total}
                        </td>
                        <td>
                            {element1.discountPercentage}
                        </td>
                        <td>
                            {element1.discountedPrice}
                        </td>
                        <td>
                            {element1.thumbnail}
                        </td>
                    </tr>
                })
            }
            <tr></tr>
           </table>
        </div>
    </>
        ))
        } 
        </>
    )
}
export default JSONDEMO;