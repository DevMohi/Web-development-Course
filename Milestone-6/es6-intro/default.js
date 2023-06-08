//Giving default parameters

//Default parameter , jodi user second parameter na dei taile 0 dibe, ar jodi dei jeita dibe sheita nibe
function add(first, second = 0) {
  const total = first + second;
  return total;
}


const result = add(10);
console.log(result);
