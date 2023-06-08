//function declaration
function add(first, second) {
  return first + second;
}

//function expression
const add1 = function add(first, second) {
  const total = first + second;
  return total;
};

// function expression with anynomous function
//doesnt have a name

const add2 = function (first, second) {
  const total = first + second;
  return total;
};

const add5 = function (first, second) {
    return first + second;
};

//arrow function
const add6 = (first,second) => first + second;


function add3(first, second) {
  const total = first + second;
  return total;
}

//Interview question : Difeferences between function declaration, function expression and arrow function

const result = add6(10, 20);
console.log(result);
