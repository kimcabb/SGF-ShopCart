// main js file

window.React = require("react");
var ProductData = require("./ProductData");
var CartAPI = require("./utils/CartAPI");
var CartApp = require("./components/CartApp");

// load mock product data into localStorage
ProductData.init();

// load mock API call
CartAPI.getProductData();

// render CartApp controller view
React.render(
  <CartApp/>
  document.getElementById("cart")
);
