// 3! = 3*(3-1)

function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
  }
  return result;
}

const result = factorial(3);
console.log(result);
