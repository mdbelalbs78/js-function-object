// function functionName(parameters) {
//     // function body 
//     // return 
// }

// var retunValue = functionName(parameters value);

// function getAverage (assignment1, assignment2,assignment3){
//     const total = assignment1 + assignment2 + assignment3;
//     const average = total / 3;
//     return average;
// }

// const assignment1Marks = 60;
// const assignment2Marks = 57;
// const assignment3Marks = 60;

// var myAverage = getAverage(assignment1Marks , assignment2Marks , assignment3Marks);
// console.log(myAverage);

function getAverage(assignment1,assignment2,assignment3){
    const total = (assignment1 + assignment2 + assignment3);
    const average = total / 3;
    return average;
}

var assignment1Marks = 60;
var assignment2Marks = 57;
var assignment3Marks = 60;


var myAverage = getAverage(assignment1Marks, assignment2Marks,assignment3Marks);
console.log(myAverage)