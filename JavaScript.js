//function
'use strict';

//function
/*
function fruitProcessor(banana, apple) {
    const juice = `juice with ${banana} bananas and ${apple}  apples`;

    return juice;
}


console.log(fruitProcessor(10, 20));

//using variable to store it
const drink = fruitProcessor(5, 8);
console.log(drink);
*/
/*
//function declaration

function calcAge1(bithYear) {
    return 2022 - bithYear;
}

const age1 = calcAge1(1995);
console.log(age1);

//calling the function first in function declaration

const age2 = calcAge2(1995);
console.log(age2);

function calcAge2(bithYear) {
    return 2037 - bithYear;
}

//function expression

const calcAge3 = function (bithYear) {
    return 2030 - bithYear;
}

const age3 = calcAge3(1995);
console.log(age3);

console.log(age1, age2, age3);
*/
//calling the function first in function expression will not give any output.

/*
const age3 = calcAge3(1995);
console.log(age3);

const calcAge3 = function (bithYear) {
    return 2030 - bithYear;
}
*/

//arrow funtion 
//for one parameter and one line of code

const calcAge4 = birthYear => 2022 - birthYear;
console.log(calcAge4(1995));

//using variable to store the value

const age = calcAge4(1997);
console.log(age);




//for one parameter and multiple lines of code

const ageUntilRetirement = birthYear => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return retirement;

}

console.log(ageUntilRetirement(1995));

//using variable to store the value

const yearsLeft = ageUntilRetirement(1997);
console.log(yearsLeft);




//for multiple parameter and multiple lines of code


const ageUntilRetirement1 = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    return `${firstName} has ${65 - age} years`;

}

console.log(ageUntilRetirement1(1995, 'shorno'));

//using variable to store the value

const yearsLeft1 = ageUntilRetirement1(1997, 'dhonno');
console.log(yearsLeft1);


