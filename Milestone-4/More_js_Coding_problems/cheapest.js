//Array of objects

const phones = [
  { name: "Samsung", camera: 12, stroage: "32gb", price: 36000 },
  { name: "Walton", camera: 12, stroage: "32gb", price: 26000 },
  { name: "Iphone", camera: 12, stroage: "32gb", price: 46000 },
  { name: "ziomi", camera: 12, stroage: "32gb", price: 86000 },
];

function cheapestPhone(phones) {
  //aita first object in array set korse
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
