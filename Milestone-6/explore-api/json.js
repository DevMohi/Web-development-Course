//This is javascript object
const user = { id: 1, name: "Aamir " };

// This is javascript object notation (JSON)
// {"id":1,"name":"Aamir "}
// -> JSON,stringify() converts a javascript value to a JSON string
const stringify = JSON.stringify(user);
console.log(stringify);

const shop = {
  owner: "Alua",
  address: {
    street: "Kochuket",
    country: "ranbit",
    country: "BD",
  },
  products: ["laptop", "keyboard"],
  isOpen: true,
  revenue: 45000,
  isNew: false,
};

//To convert the object to Json
const shopJson = JSON.stringify(shop);
// console.log(shopJson); 

//To reconvert the json to object
const shopObject = JSON.parse(shopJson);
console.log(shopObject);
