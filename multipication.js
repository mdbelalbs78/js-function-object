//  function multiplication 

function multiplicationOfNumbers(number){
   let result = 1;
    for(let i = 1; i <= number; i++){
       result = result * i;
    }
    return result;
}

const results = multiplicationOfNumbers(11);
console.log(results);