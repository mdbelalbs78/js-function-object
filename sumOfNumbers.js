// 1- 7 sum 
let sum = 0;
for(var i = 0; i<= 7; i++){
    sum = sum + i;
    console.log(i, sum)   
}

function sumOfNumbers(numbers){
    
let sum = 0;
for(var i = 0; i<= numbers; i++){
    sum = sum + i;
    console.log(i, sum)   
}
 return sum;
}
sumOfNumbers(5);
