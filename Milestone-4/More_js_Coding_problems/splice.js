const friends = [12, 45, 32, 22, 44, 62, 29, 69];

//Splice
//Removes element from an array
//If necessary inserts new element in their place
//Returns the deleted element.
//Will change the original array

//splice(index, how many elements you want to remove);
const partial = friends.splice(2, 3,99,555,77);
console.log(partial);
console.log(friends);
