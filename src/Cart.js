import React from 'react';
 
  const Cart = ({inCart}) =>  (

    <div className="boughtList">         
        <p>In Shopping Cart:</p>
        <ul>
        {
          inCart.map( inCart => (
            <li>
            {
              inCart
            }
            </li>)
            )}
      </ul>
    </div>
    );


export default Cart;
