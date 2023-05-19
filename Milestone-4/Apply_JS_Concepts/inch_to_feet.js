function inchToFeet(inch){
    let feet = inch/12;
    return feet;
}

// const myInches = 12;

// const myFeet = myInches / 12;
// console.log(myFeet);

// const dataInches = 144;
// const dadaFeet = dataInches / 12;
// console.log("data feet", dadaFeet);


let dada= inchToFeet(60);
console.log("dada inch",dada);

let dadi = inchToFeet(50);

//first e value string chilo tai parse korsi
console.log("dada inch",parseFloat(dadi.toFixed(2)));
