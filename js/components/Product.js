// product component

var React = require('react');
var CartActions = require('../actions/CartActions');

// product view
var Product = React.createClass({

  // add item to cart via actions
  addToCart: function(event){
    var sku = this.props.selected.sku;
    var update = {
      name: this.props.product.name,
      type: this.props.selected.type,
      price: this.props.selected.price
    }
    CartActions.addToCart(sku, update);
    CartActions.updateCartVisible(true);
  },

  // select product variation via actions
  selectVariant: function(event){
    CartActions.selectProduct(event.target.value);
  },

  // render product view
  render: function(){
    var ats = (this.props.selected.sku in this.props.cartitems) ?
      this.props.selected.inventory - this.props.cartitems[this.props.selected.sku].quantity :
      this.props.selected.inventory;
    return (
      <div className="product">
        <img src={this.props.product.img_url}/>
        <div className="product-detail">
          <h1 className="name">{this.props.product.name}</h1>
          <p className="description">{this.props.product.description}</p>
          <p className="price">Price: ${this.props.selected.price}</p>
          <select onChange={this.selectVariant}>
            {this.props.product.variants.map(function(variant, index){
              return (
                <option key={index} value={index}>{variant.type}</option>
              )
            })}
          </select>
          <button type="button" onClick={this.addToCart} disabled={ats  > 0 ? '' : 'disabled'}>
            {ats > 0 ? 'Add To Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    );
  },

});

module.exports = Product;
