// Searching products  
const products = [
  { id: 1, name: "walton Phone", price: 49000 },
  { id: 2, name: "Siz phone", price: 81000 },
  { id: 3, name: "Iphone", price: 25000 },
  { id: 4, name: "Etate", price: 35000 },
  { id: 5, name: "Laptop", price: 5000 },
  { id: 6, name: "Starbuyck", price: 40000 },
  { id: 7, name: "Sam phone", price: 39000 },
];

function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const result = matchedProducts(products, "phone");
console.log(result);
