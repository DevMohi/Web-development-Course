function reverseWords(str) {
  const words = str.split(" ");
  const result = [];
  // words =  [ 'I', 'am', 'a', 'good', 'boy' ]
  for (let i = words.length - 1; i >= 0; i--) {
    const element = words[i];
    result.push(element);
  }
  //Making it a sentence
  const reversed = result.join(" ");
  console.log(reversed);
}

const myString = "I am a good boy";
reverseWords(myString);
