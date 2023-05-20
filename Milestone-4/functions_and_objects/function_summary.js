// function functionname (param){
//     code 
//     return 
// }


function getTotal(mark1, mark2){
    const total = mark1 + mark2;
    const average = total/2;
    return average;
}

const mark1 = 30;
const mark2 = 25;

var myAverage = getTotal(mark1,mark2);

console.log("My Assingment Average: ",myAverage);