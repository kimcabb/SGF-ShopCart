// for use to allow real API according to Flux architecture

var Dispatcher = require('flux').Dispatcher;

// create dispatcher instance
var AppDispatcher = new Dispatcher();

// convenience method to handle dispatch requests
AppDispatcher.handleAction = function(action){
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};

module.exports = AppDispatcher;
