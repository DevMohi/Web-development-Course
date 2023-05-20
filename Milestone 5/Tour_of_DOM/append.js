const placesList = document.getElementById("places-list");

// console.log(placesList);

//creating an element
const li = document.createElement("li");
li.innerText = "Pahartoli";

placesList.appendChild(li);
//

//1.Where to add

const mainContainer = document.getElementById("main-container");

console.log(mainContainer);

//what to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My Food List";
section.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "biryani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "borhani";
ul.appendChild(li2);

section.appendChild(ul);

mainContainer.appendChild(section);

//set innerHtml directly

const sectionDress = document.createElement("section");

sectionDress.innerHTML = `
    <h1> My Dress Section </h1>
    <ul>
        <li>T-shirt</li>
        <li>Lungi</li>
    </ul>
`;

mainContainer.appendChild(sectionDress);
