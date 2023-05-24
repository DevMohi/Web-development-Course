console.log("This is seperate JS file");

//option 2 : add onClick function on html element
// <!-- option 2  -->
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//Option 3

const makeBlueButton = document.getElementById("make-blue");
//aikane () aita dibana
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//Option 3 another

const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

//final option
// Option 1
//   With addEventListener option 1
const pinkButton = document.getElementById("make-pink");

pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}


//Option 2
// /   With addEventListener option 2
const greenButton = document.getElementById("make-green");
console.log(greenButton);

greenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});
