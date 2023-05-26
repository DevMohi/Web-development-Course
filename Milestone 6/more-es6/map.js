const numbers = [2, 8, 4, 6, 3];

const output = [];

for (const number of numbers) {
  const doubled = number * 2;
  output.push(doubled);
}

//Map function returns an array 
const makeDouble = numbers.map(num => num * 2);
console.log(makeDouble);


