//Storing values in an array by push
function getOddNumbersOfArray(numbers) {
     let sum = 0;
  const oddNumbers = [];
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];

    if (element % 2 !== 0) {
      oddNumbers.push(element);
      sum = sum+ element;
    } 
  }
  return sum;
}

const myNumbers = [1,2,3,4,5];

const oddNumbersSum = getOddNumbersOfArray(myNumbers);
console.log(oddNumbersSum);

