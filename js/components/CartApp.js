// main controller view

var React = require('react');
var CartStore = require('../stores/CartStore');
var ProductStore = require('../stores/ProductStore');
var Product = require('./Product');
var Cart = require('./Cart');

// method to retrieve state from Stores
function getCartState(){
  return {
    product: ProductStore.getProduct(),
    selectedProduct: ProductStore.getSelected(),
    cartItems: CartStore.getCartItems(),
    cartCount: CartStore.getCartCount(),
    cartTotal: CartStore.getCartTotal(),
    cartVisible: CartStore.getCartVisible()
  };
}

// define main controller view
var CartApp = React.createClass({

  // get initial state from stores
  getInitialState: function(){
    return getCartState();
  },

  // add change listeners to stores
  componentDidMount: function(){
    ProductStore.addChangeListener(this._onChange);
    CartStore.addChangeListener(this._onChange);
  },

  // remove change listeners from stores
  componentWillUnmount: function(){
    ProductStore.removeChangeListener(this._onChange);
    CartStore.removeChangeListener(this._onChange);
  },

  // render child components, passing state via props
  render: function(){
    return(
      <div className='cart-app'>
        <Cart products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal} visible={this.state.cartVisible} />
        <Product product={this.state.product} cartitems={this.state.cartItems} selected={this.state.selectedProduct} />
      </div>
    );
  },

  // method to set state based upon Store changes
  _onChange: function(){
    this.setState(getCartState());
  }

});

module.exports = CartApp;
