function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    reversed = reversed + element;
  }
  return reversed;
}

const myString = "I am a good boy";
const reversed = reverseString(myString);

console.log("Reverse output :", reversed);
