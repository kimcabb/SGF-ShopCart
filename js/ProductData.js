// Mock data & API until set up rails API

module.exports = {
  // loading mock data into local storage
  init: function(){
    localStorage.clear();
    localStorage.setItem("product", JSON.stringify([
      {
        id: "0001",
        name: "Cabbage",
        img: "cabbage.jpg",
        description: "One head of cabbage, organic.",
        variants: [
          {
            sku: "1231",
            type: "green",
            price: 2.99,
            inventory: 3
          },
          {
            sku: "1232",
            type: "red",
            price: 3.99,
            inventory: 2,
          }
        ]
      }
    ]));
  }
};
