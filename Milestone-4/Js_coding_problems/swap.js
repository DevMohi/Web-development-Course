let first = 5;
let second = 7;

//approach1
// let temp = first;
// first = second;
// second = temp;

//approach2 -> swap with destrucutring

[first, second] = [second, first];
console.log(first, second);
