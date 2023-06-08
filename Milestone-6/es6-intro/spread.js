const numbers = [12, 89, 999, 78];

// const largest = Math.max(...numbers);
// console.log(largest);


//How to copy an array properly 
const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(7777);
console.log(numbers);
console.log(numbers2);
