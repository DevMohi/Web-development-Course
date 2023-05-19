const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11, name: "Agum" };
const friends = [13, 14, 15, 16, 17];

function add(num1, num2) {
  return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);

//Check array using Array.isArray
console.log(Array.isArray(friends));

// You can check with includes or indexOf
console.log(friends.includes(16));
if (friends.indexOf(252) !== -1) {
  //jodi -1 dei taile exist korena
}

//concat = to add one array with another
const newFriendsAge = [12, 13, 11, 13];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);

console.log(typeof add);
