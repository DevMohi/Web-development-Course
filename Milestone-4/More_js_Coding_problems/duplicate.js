function removeDuplicate(names) {
  const uniqueNames = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    //jodi name ta na thake taile add kore dibe
    //ar jodi mile jai it won't add. 
    if (uniqueNames.includes(name) === false) {
      uniqueNames.push(name);
    }
  }
  return uniqueNames;
}

const names = ["abul", "babul", "cabul", "babul", "abul", "modi"];

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
