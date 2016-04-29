// define action creator methods to be called from components

var AppDispatcher = require('../dispatcher/AppDispatcher');
var CartConstants = require('../constants/CartConstants');

// define actions object
var CartActions = {

  // receive initial product data
  receiveProduct: function(data){
    AppDispatcher.handleAction({
      actionType: CartConstants.RECEIVE_DATA,
      data: data
    })
  },

  // set currently selected product variation
  selectProduct: function(index){
    AppDispatcher.handleAction({
      actionType: CartConstants.SET_SELECTED,
      data: index
    })
  },

  // add item to cart
  addToCart: function(sku, update){
    AppDispatcher.handleAction({
      actionType: CartConstants.CART_ADD,
      sku: sku,
      update: update
    })
  },

  // remove item from cart
  removeFromCart: function(sku){
    AppDispatcher.handleAction({
      actionType: CartConstants.CART_REMOVE,
      sku: sku
    })
  },

  // update cart visibility
  updateCartVisible: function(cartVisible){
    AppDispatcher.handleAction({
      actionType: CartConstants.CART_VISIBLE,
      cartVisible: cartVisible
    })
  }

};

module.exports = CartActions;
