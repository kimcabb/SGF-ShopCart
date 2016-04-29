// cart component

var React = require('react');
var CartActions = require('../actions/CartActions');

// cart view
var Cart = React.createClass({

  // hide cart via actions
  closeCart: function(){
    CartActions.updateCartVisible(false);
  },

  // show cart via actions
  openCart: function(){
    CartActions.updateCartVisible(true);
  },

  // remove item from cart via actions
  removeFromCart: function(sku){
    CartActions.removeFromCart(sku);
    CartActions.updateCartVisible(false);
  },

  // render cart view
  render: function(){
    var self = this, products = this.props.products;
    return(
      <div className={"cart " + (this.props.visible ? 'active' : '')}>
        <div className="mini-cart">
          <button type="button" className="close-cart" onClick={this.closeCart}>×</button>
          <ul>
            {Object.keys(products).map(function(product){
              return(
                <li key={product}>
                  <h1 className="name">{products[product].name}</h1>
                  <p className="type">{products[product].type} x {products[product].quantity}</p>
                  <p className="price">${(products[product].price * products[product].quantity).toFixed(2)}</p>
                  <button type="button" className="remove-item" onClick={self.removeFromCart.bind(self, product)}>Remove</button>
                </li>
              )
            })}
          </ul>
          <span className="total">Total: ${this.props.total}</span>
        </div>
        <button type="button" className="view-cart" onClick={this.openCart} disabled={Object.keys(this.props.products).length > 0 ? "" : "disabled"}>View Cart ({this.props.count})</button>
      </div>
    );
  },

});

module.exports = Cart;
