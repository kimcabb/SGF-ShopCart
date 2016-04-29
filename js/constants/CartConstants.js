// define the actions this app will perform

var keyMirror = require('react/lib/keyMirror');

// define action constants
module.exports = keyMirror({
  CART_ADD: null,       // add item to cart
  CART_REMOVE: null,    // remove item from cart
  CART_VISIBLE: null,   // cart visibile/not visible
  SET_SELECTED: null,   // select product option
  RECEIVE_DATA: null    // load mock data
});
