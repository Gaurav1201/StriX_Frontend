import React from 'react'
import { useParams } from "react-router-dom";

function Shop() {
    const { id } = useParams(); 
  return (
    <>
    <div>Shop</div>
    <div>{id}</div>
   </>
  )
}

export default Shop