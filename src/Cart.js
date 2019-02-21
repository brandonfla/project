import React from 'react';

class Cart extends React.Component {
 
  render() {
    return (
    <div className="boughtList">         
        <p>In Shopping Cart:</p>
      <div>
        <ul>
          {this.props.inCart.map( items => (
            <li>{items}</li>
          ))}
        </ul>
      </div>
    </div>
    );
  }
}

export default Cart;
