import React, { useState } from 'react'


function ProductDisplay(props) {

    // const increment = (index) => {
    //         setCart((prevCart) =>
    //           prevCart.map((item, i) => {
    //             if (i === index) {
    //               return { ...item, quantity: item.quantity + 1 };
    //             }
    //             return item;
    //           })
    //         );
    //       };
    //       const decrement = (index) =>{
    //         setCart((prevCart) =>
    //           prevCart.map((item, i) => {
    //             if (i === index) {
    //               if(item.quantity===0){return 0}
    //               else{
    //               return { ...item, quantity: item.quantity -1 };
    //             }}
    //             if(item.quantity<0){return 0;}
    //             return item;
    //           })
    //         );
    //       }

    const handleAddition = (e) =>{
        setAddedToCart(true)
        props.AddToCart(props.element)
        console.log('The product display page ',typeof(props.element),props.element)
    }
    const handleRemoval=()=>{
        props.removeFromCart(props.element._id)
        setAddedToCart(false)
    }

    const incrementProduct = (productKey) =>{
      console.log(productKey)
      props.incrementProduct(productKey);
      props.decrementProduct(productKey);
    }
    const decrementProduct = (productKey) =>{
      console.log(productKey)
      props.decrementProduct(productKey);
    }
     const [inCart, setInCart] = useState([]);
     const [addedToCart, setAddedToCart] = useState(false);
  return (
    
        <div style={{"backgroundColor":"blue", "width":"200px"}}>
          <p>Product Name:</p> <h1>{props.element.productName}</h1>
          <p>Product Cost: {props.element.productPrice}</p>
          {addedToCart ? <div>
            <button onClick={()=> incrementProduct(props.key) }>+</button>
            <button onClick={()=> decrementProduct(props.key)}>-</button>
            <button onClick={()=>handleRemoval()}>Remove From cart</button>
          </div>
          :<button onClick={()=>handleAddition()}>Add To cart</button> }
          </div>
  )
}
export default ProductDisplay;    