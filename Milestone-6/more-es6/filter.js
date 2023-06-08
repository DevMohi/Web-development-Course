const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

//filter returns an array
//Filerting number greater than 20
const bigNums = numbers.filter((number) => number > 20);
const even = numbers.filter((num) => num % 2 === 0);
// console.log(even);
// console.log(bigNums);

const products = [
  {
    id: 1,
    name: "laptop",
    price: 45000,
  },
  {
    id: 2,
    name: "phone",
    price: 35000,
  },
  {
    id: 3,
    name: "Games",
    price: 65000,
  },
];

const expensive = products.filter((p) => p.price > 40000);
console.log(expensive);
