import React, { Component } from 'react';

class Buy extends Component {

  render() {
    return (
      <div className="buyList">
        <div className="buyBox">
          <p>To Buy:</p>      
            <input type="text"
              ref={(input) => {this.textInput = input}} value={this.props.shopItems} 
              onChange={shopItems => this.props.updateShopItems(shopItems)}
              onKeyPress={this.props.handleKeyPress}
              />
            <button onClick={this.props.addItems}>Add</button>
              <ul>
                {this.props.onShelf.map( items => (
                  <li onClick={ () => this.props.handleClickItem(items)}>{items}</li>
                ))}
              </ul>
        </div>
      </div>
    );
  }
}

export default Buy;
