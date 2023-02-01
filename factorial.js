// factorial

function factorial (number){
    let result = 1;
    for(let i = 1; i <= number; i++){
         result = result * i;
    }
    return result;
}
const results = factorial(9);
console.log(results);