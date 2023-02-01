var shoppingCart = {
    book: 3,
    sungless: 1,
    keyword: 5,
    mouse: 1,
    pen: 25,
    shoes: 2, 
}

var belal = Object.keys(shoppingCart);
// console.log(keys);

for(var i = 0; i<belal.length; i++){
    var propertiyName = belal[i];
    var propertyValue = shoppingCart[propertiyName]
    // console.log(propertiyName , propertyValue);

}

// for in loop 

for(var propertiyName in shoppingCart){
    const value = shoppingCart[propertiyName]
    console.log(propertiyName, value);
}