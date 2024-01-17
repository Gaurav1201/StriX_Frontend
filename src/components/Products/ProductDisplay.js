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

    const handleClick = (e) =>{
        setAddedToCart(true)
        props.AddToCart(props.element)
        console.log('The product display page ',typeof(props.element),props.element)
    }
    const handleremove=()=>{
        props.removeFromCart(props.element._id)
        setAddedToCart(false)
    }
     const [inCart, setInCart] = useState([]);
     const [addedToCart, setAddedToCart] = useState(false);
  return (
    
        <div style={{"backgroundColor":"blue", "width":"200px"}}>
          <p>Product Name:</p> <h1>{props.element.productName}</h1>
          <p>Product Cost: {props.element.productPrice}</p>
          {addedToCart ? <div>
            <button>+</button>
            <button>-</button>
            <button onClick={()=>handleremove()}>Remove From cart</button>
          </div>
          :<button onClick={()=>handleClick()}>Add To cart</button> }
          </div>
  )
}
export default ProductDisplay;    