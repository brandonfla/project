import React, { Component } from 'react';
import Buy from './Buy';
import Cart from './Cart';


class ListItems extends Component {
  constructor(props) {
    super(props);
      this.state = {
        shopItems: '',
        onShelf: [],
        inCart: [],
      }

      this.addItems = this.addItems.bind(this);
      this.updateShopItems = this.updateShopItems.bind(this);
    }
  
    // Moves list items the Buy list to the Shopping Cart
  handleClickItem = items => {
      this.setState({ inCart: this.state.inCart.concat(items), onShelf: this.state.onShelf.filter( i => i !== items)});
  }
    // Logs inputted Items
  updateShopItems(shopItems) {
      this.setState({ shopItems: shopItems.target.value })
  }
    // Adds items to the Buy List and Filters out duplicate items
  addItems() {
    if (this.state.shopItems === '') {return}
      const onShelfFoundInToBuy = this.state.onShelf.filter( items => items.toLowerCase() ===       this.state.shopItems.toLowerCase() );
      const onShelfFoundInShoppingCart = this.state.inCart.filter( items => items.toLowerCase()     === this.state.shopItems.toLowerCase())
    if ( onShelfFoundInToBuy.length > 0 || onShelfFoundInShoppingCart.length > 0) {
      return;
      }
      this.setState({ shopItems: '', onShelf: this.state.onShelf.concat(this.state.shopItems) });
    }
    // Allows the 'Enter' key to be used to add notes
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({ shopItems: e.target.value }, () => {
      this.addItems();    
        })
      }
    }
render() {
  return (
    <div>
      <Buy onShelf={this.state.onShelf} shopItems={this.state.shopItems}
        addItems={this.addItems} handleClickItem={this.handleClickItem} handleKeyPress={this.handleKeyPress} updateShopItems={this.updateShopItems}/>
      <Cart inCart={this.state.inCart}/>
    </div>
    )
  }
}

export default ListItems;