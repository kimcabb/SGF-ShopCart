// mock API

var CartActions = require("../actions/CartActions");

module.exports = {
  // load mock data from localStorage created in ProductData
  getProductData: function(){
    var data = JSON.parse(localStorage.getItem("product"));
    CartActions.receiveProduct(data);
  }
};
