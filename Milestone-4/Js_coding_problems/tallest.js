//Finding largest in array 

function maxInArray(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    let number = numbers[index];
    if (number > largest) {
      largest = number;
    }
  }
  return largest;
}

const heights = [10, 20, 30,140, 50];

const tallest = maxInArray(heights);

console.log(tallest);
