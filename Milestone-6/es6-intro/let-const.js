//Dont use var

//let : reassiganable
//const: do not allow it to reassign;

let money = 25;
money = 35;
console.log(money);

const bird = "jaan pakhi";
// bird = "moyna pakhi";
const message = bird + "potas potas";
console.log(message);

const numbers = [12, 89, 65, 45];
// const e reassign not allowed but you can modify
// numbers = [77,65,55,29]

numbers.push(177);
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  var number = numbers[i];
}
//If it was declared with const you cannot get the value out of the scope. 
console.log(number);
