//function
'use strict';


function fruitProcessor(banana, apple) {
    const juice = `juice with ${banana} bananas and ${apple}  apples`;

    return juice;
}


console.log(fruitProcessor(10, 20));

//using variable to store it
const drink = fruitProcessor(5, 8);
console.log(drink);
