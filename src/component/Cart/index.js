import React from 'react'
import './style.css'

/**
* @author
* @function Cart
**/

const Cart = (props) => {
  return(
    <div className="cart">
     <h3 className="bagdata">Bag<span>10</span></h3>
     <img src="./images/container.svg"  alt="container-img"/>
     <h4>Your bag is Empty</h4>
     <p>Looks like you haven't made</p>
     <p>Your choice yet</p>
    </div>
   )

 }

export default Cart