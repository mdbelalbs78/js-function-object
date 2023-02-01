function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
}
// add(25, 25)

// var total = add(80, 20);
// console.log('total:', total);

function bringSingara(money){
    var singrPrice = 10;
    var quantity = money / singrPrice;
    return quantity;
}

var myTaka = 150
var singaris = bringSingara(myTaka);
console.log(singaris);