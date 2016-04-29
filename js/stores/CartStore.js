// manage application state for cart

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CartConstants = require('../constants/CartConstants');
var _ = require('underscore');

// define initial data points
var _products = {}, _cartVisible = false;

// add product to cart
function add(sku, update){
  update.quantity = sku in _products ? _products[sku].quantity + 1 : 1;
  _products[sku] = _.extend({}, _products[sku], update)
}

// set cart visibility
function setCartVisible(cartVisible){
  _cartVisible = cartVisible;
}

// remove item from cart
function removeItem(sku){
  delete _products[sku];
}

// extend CartStore with EventEmitter to add eventing capabilities
var CartStore = _.extend({}, EventEmitter.prototype, {

  // return cart items
  getCartItems: function(){
    return _products;
  },

  // return # of items in cart
  getCartCount: function(){
    return Object.keys(_products).length;
  },

  // return cart cost total
  getCartTotal: function(){
    var total = 0;
    for(product in _products){
      if(_products.hasOwnProperty(product)){
        total += _products[product].price * _products[product].quantity;
      }
    }
    return total.toFixed(2);
  },

  // return cart visibility state
  getCartVisible: function(){
    return _cartVisible;
  },

  // emit change event
  emitChange: function(){
    this.emit('change');
  },

  // add change listener
  addChangeListener: function(callback){
    this.on('change', callback);
  },

  // remove change listener
  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }

});

// register callback with AppDispatcher
AppDispatcher.register(function(payload){
  var action = payload.action;
  var text;

  switch(action.actionType) {

    // respond to CART_ADD action
    case CartConstants.CART_ADD:
      add(action.sku, action.update);
      break;

    // respond to CART_VISIBLE action
    case CartConstants.CART_VISIBLE:
      setCartVisible(action.cartVisible);
      break;

    // respond to CART_REMOVE action
    case CartConstants.CART_REMOVE:
      removeItem(action.sku);
      break;

    default:
      return true;
  }

  // if action was responded to, emit change event
  CartStore.emitChange();

  return true;

});

module.exports = CartStore;
