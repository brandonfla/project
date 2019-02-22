import React from 'react';
 
  const Cart = ({inCart}) =>  {

    return (
    <div className="boughtList">         
        <p>In Shopping Cart:</p>
      <div>
      <ul>
      {inCart.map( inCart => (
        <li>{inCart}</li>
      ))}
    </ul>
      </div>
    </div>
    )};


export default Cart;
