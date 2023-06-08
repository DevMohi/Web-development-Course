const fish = {
  name: "King hilsha",
  address: "Chandpur",
  phone: "01666666",
};

//Object e destructure korar somoi order maintain korte hoina 
const { name, phone, address } = fish;

console.log(name, phone, address);

//Array destructuring
//Maintains order
const number = [10,20,30,40,50];
const [a,b] = number;

console.log(a,b);

