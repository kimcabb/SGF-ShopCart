// Mock data & API until set up rails API

module.exports = {
  // load mock data into local storage
  init: function(){
    localStorage.clear();
    localStorage.setItem("product", JSON.stringify([
      {
        id: "0001",
        name: "Cabbage",
        image: 'cabbage.jpg',
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
      },

      {
        id: "0002",
        name: "Tomato",
        img: "tomato.jpg",
        description: "One pound of tomatoes, organic.",
        variants: [
          {
            sku: "1233",
            type: "beefsteak",
            price: 2.69,
            inventory: 12
          },
          {
            sku: "1234",
            type: "roma",
            price: 3.25,
            inventory: 12,
          }
        ]
      }
    ]));
  }
};
