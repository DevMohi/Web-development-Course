var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: "Corsair",
  pen: 25,
};

//1)when you know the property name use dot notation
// to get property
var penCount = shoppingCart.pen;

//2) Alternative to no 1 when you know the name of property

var penCount2 = shoppingCart["pen"];

// 3rd way
var propertyName = "mouse";
var propertyValue = shoppingCart[propertyName];

//Gives all the keys in javascript
var properties = Object.keys(shoppingCart);

//Gives all the values in javascript
var properties2 = Object.values(shoppingCart);

// setting property values

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: "Corsair",
    pen: 25,
  };
//3 ways to set values in object

//No 1 
shoppingCart.mouse = "Shaks";

//No 2
shoppingCart["sunglass"] = 15;

// No 3 
var propertyName2 = "keyboard";
shoppingCart[propertyName2] = 10;

console.log(shoppingCart);
