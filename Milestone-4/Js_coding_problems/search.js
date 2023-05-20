//Searching something with includes
const lyrics = "Tumi Bondu kala pakhi ami jeno ki";

const searchString = "pakhi";
const lyricsLowerCase = lyrics.toLowerCase();

const doesExist = lyricsLowerCase.includes(searchString.toLowerCase());
console.log(doesExist);

// indexof
// returns the index of k here and if it doesnt exist it shows -1
console.log(lyrics.indexOf("kala"));



//starts with
console.log(lyrics.startsWith("Tumi"));
