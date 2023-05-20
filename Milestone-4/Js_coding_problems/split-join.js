const lyrics = "Tumi Bondu kala pakhi ami jeno ki. Ki obosta mama";

//Split where there is space
// const parts = lyrics.split(" ");
// console.log(parts);

const sentences = lyrics.split(".");
// console.log(sentences);

const char = lyrics.split("");
// console.log(char);

//slice(start index,end index);
const partial = lyrics.slice(0, 4);
// console.log(partial);

const partial2 = lyrics.substring(5, 8);
// console.log(partial2); 


//Dot die join korsi array er bhitor jeigulo comma die seperated. 
const lines = ["Tumi Bondu kala pakhi ami jeno ki", "Ki obosta mama"];

const newSong = lines.join(".");

console.log(newSong);
