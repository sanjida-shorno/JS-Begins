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
/*

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
*/




'use strict'
//function calling unsing function expression
/*
const cutFruitPieces = function (fruit) {
    return fruit * 4;
}

const fruitProcessor = function (banana, apple) {
    const bananaPieces = cutFruitPieces(banana);
    const applePieces = cutFruitPieces(apple);

    const juice = `juice with ${bananaPieces} banana pieces & ${applePieces} apple pieces`;
    return juice;

}

console.log(fruitProcessor(2, 3));

//storing result in a variable

const drinkJuice = fruitProcessor(5, 4);
console.log(drinkJuice);




//function calling unsing function declaration

function cutFruitPieces2(fruit) {
    return fruit * 4;
}

function fruitProcessor2(orange, grape) {
    const orangePieces = cutFruitPieces2(orange);
    const grapePieces = cutFruitPieces2(grape);

    const juice2 = `juice with ${orangePieces} orange pieces & ${grapePieces} grape pieces`;
    return juice2;

}

console.log(fruitProcessor2(20, 30));

//storing result in a variable

const drinkJuice2 = fruitProcessor2(50, 40);
console.log(drinkJuice2);




//function calling unsing arrow function

const cutFruitPieces3 = fruit => fruit * 4;


const fruitProcessor3 = (banana3, apple3) => {
    const bananaPieces3 = cutFruitPieces3(banana3);
    const applePieces3 = cutFruitPieces3(apple3);


    const juice3 = `juice with ${bananaPieces3} banana3 pieces & ${applePieces3} apple3 pieces`;
    return juice3;

}

console.log(fruitProcessor3(2, 3));

//storing result in a variable

const drinkJuice3 = fruitProcessor3(5, 4);
console.log(drinkJuice3);
*/


//function review

/*
const calcAge = function (birthyear) {
    return 2022 - birthyear;

}

const yearsUntilretirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} already retired`)
        return -1;
    }

}

console.log(yearsUntilretirement(1995, 'shorno'));
console.log(yearsUntilretirement(1950, 'dhonno'));
*/

//coding challenge #1(fundamentals part2)
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§
§
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
*/
/*

const calcAverage = (value1, value2, value3) => (value1 + value2 + value3) / 3;

const avgDolphins = calcAverage(44, 23, 71);
console.log(avgDolphins);

const avgKoalas = calcAverage(65, 54, 49);
console.log(avgKoalas);


const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);

    } else {
        console.log("no team wins")
    }
}

checkWinner(avgDolphins, avgKoalas);

const scoreDolphins = calcAverage(85, 54, 41,);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);
*/

//array
/*
//creating array:

const friends = ['saiful', 'strela', 'Ivy'];
console.log(friends);

//another way of crreating array:

const friends2 = new Array('saiful', 'strela', 'Ivy')
console.log(friends2)

const years = new Array(1995, 1997, 2022)
console.log(years)


console.log(years[0]);

console.log(years.length);
console.log(years[years.length - 1]);//printing the last value of the array

//replacing a value of friends array

friends[1] = 'dhonno';
console.log(friends);

const firstName = 'shorno';
const shorno = [firstName, 'dhonno', 2037 - 2022, 'teacher', friends];
console.log(shorno);

//using array elements into a function

const calcAge = function (birthYear) {
    return 2050 - birthYear;
}

console.log(calcAge(years[1]));

//storing it in a variable:

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

//or we can do it by creating another array

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/
//array methods
/*

const friends = ['saiful', 'strela', 'Ivy', 'erom'];
console.log(friends);

//adding methods:

friends.push('jolly');//add last
console.log(friends);

const pushed = friends.push('happy');//add last
console.log(pushed);

friends.unshift('mou');//add first
console.log(friends);

//removing methods:

friends.pop('jolly');//remove last
console.log(friends);

friends.shift('mou');//remove first
console.log(friends);

//positioning methods:


console.log(friends.indexOf('strela'));


console.log(friends.indexOf('bob'));

//boolean method
console.log(friends.includes('strela'));


console.log(friends.includes('bob'));

if (friends.includes('strela')) {
    console.log('strela yah');
}
*/

//we can declare same variable name twice with var but can't do it with let or const
/*
var carName = "Volvo";
var carName = "Honda";
console.log(carName);

let carName2 = "BMW";
// let carName2 ="toyota"; //not allowed
carName2 = "ferrari" // allowed without writing let
console.log(carName2);

const carName3 = "lexus";
// const carName3="jeep"; //not allowed
//carName3="marcedes" //not allowed
console.log(carName3);

let x = 2 + 3 + "5"; //55
let y = "5" + 2 + 3; //523
console.log(x, y)

{
    let x = 10;
    console.log(x); //10

}
console.log(x); //55

{
    let x = 20;
    console.log(x); //20

}

console.log(x); //55
*/

/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉
*/

/*
function calcTip(bill) {

    return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

}

console.log(calcTip(500));

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];

console.log(bills, tips, total);
*/

//T.no43:object
/*
const shorno = {
    firstName: 'sanjida',
    lastName: 'tasnim',
    age: 2022 - 1995,
    job: 'teacher',
    friends: ['saiful', 'strela', 'ivy']
}

console.log(shorno);

//property getting from the object using dot:

console.log(shorno.age);//age is real property of shorno

////property getting from the object using bracket notation:
console.log(shorno['firstName']);

const keyName = "Name"
console.log(shorno['last' + keyName]);

//example:

const interestedIn = prompt('what do you want to know about shorno?')
console.log(shorno.interestedIn);//interestedIn is not a real property of shorno

console.log(shorno[interestedIn]);

console.log(shorno.friends.length);//length is real property of shorno

// if (shorno[interestedIn]) {
//     console.log(`bio: ${shorno[interestedIn]}`);
// } else {
//     console.log(`wrong request!`);
// }

console.log(shorno[interestedIn] ? (`bio: ${shorno[interestedIn]}`) : `wrong request`);
//adding properties in the object using both:

shorno.location = 'Bangladesh';
shorno['mail'] = 'shornohstu29@gmail.com';
console.log(shorno);


console.log(`${shorno.firstName} has ${shorno.friends.length} friends,
and his best friend is called ${shorno.friends[0]}`);
*/

//T.no44 object methods:
'use strict'
/*

const shorno = {
    firstName: 'sanjida',
    lastName: 'tasnim',
    birthYear: 1995,
    job: 'teacher',
    friends: ['saiful', 'strela', 'ivy'],
    hasDriversLicense: true,

    calcAge: function () {
        //console.log(this);
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age}-years old ${this.job}, and has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }
}

console.log(shorno['calcAge']());
console.log(shorno.calcAge());

console.log(shorno);

console.log(shorno.age);
console.log(shorno['age']);

console.log(shorno.getSummary());

console.log(shorno);
*/


//T.no 45
/*

Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        mark.BMI = mark.mass / mark.height ** 2;
        return this.BMI;
    }

}

const john = {
    fullName: 'JOhn Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return john.BMI;
    }


}

mark.calcBMI();// we must have to call the functin first before using it in the console
console.log(`mark bmi is ${mark.calcBMI()}`); //24

john.calcBMI();
console.log(`john bmi is ${john.BMI}`); //27


``
if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`);
}

*/

//T no.46 the for loop

for (let i = 1; i <= 10; i++) {
    console.log(`lifting weight repetition ${i}`);
}
