const numbers = [12, 55, 30, 40];

//Map returns in an array , map pushes the values into an array.
const half = numbers.map((n) => n / 2);
const thirds = numbers.map((n) => n / 3);

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

const items = products.map((p) => p.name);
console.log(items);
