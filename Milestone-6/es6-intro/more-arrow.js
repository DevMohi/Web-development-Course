const add = (first, second) => first + second;
const getFullName = (first, last) => first + " " + last;

const multiply = (a, b) => a * b;

const result = multiply(7, 8);
console.log(result);

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

//Without parameters

//after arrow is the return things
// and the bracket holds the parameters

//No param arrow function
const getPie = () => 3.14;

//One parameter
const doubleIt = (num) => num * 2;

//one parameter simple verstion
//No need bracket for one param just write the param

const fiveTimes = (num) => num * 5;

//Multi-line arrow function
// You have to use return to get the values from multi-line function
const doMath = (x, y, z) => {
  const firstSum = x + y;
  const secondSum = y + z;
  const multiplyResult = firstSum * secondSum;
  const result = multiplyResult / 2;
  return result;
};

// let me = {
//   name: "John",

//   thisName() {
//     console.log(this.name);
//   },
// };

// me.thisName();


let me2 = {
  name: "John",

  thisName: () => {
    console.log("My name is  "+ this.name);
  },
};

me.thisName();
