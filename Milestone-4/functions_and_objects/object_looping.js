var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: "Corsair",
  pen: 25,
  shoes: 2,
  bottle: 1,
};

//Loop over objects

const keys = Object.keys(shoppingCart);
const values = Object.values(shoppingCart);

// 1st way
// for (var i = 0; i < keys.length; i++) {
//   var propertyName = keys[i];
//   //   2nd get method
//   var propertyValue = shoppingCart[propertyName];
//   console.log(propertyName, propertyValue);
// }

// 2nd way 

for (var propertyName in shoppingCart) {
  const value = shoppingCart[propertyName];
  console.log(propertyName , value);
}
