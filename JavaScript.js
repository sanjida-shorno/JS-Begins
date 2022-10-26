//intro
/*
alert('hello world');
*/

//myself
/*
 let sts = 'shorno';
if (sts === 'shorno') alert('let me introduce myself');
document.write(" I'm sanjida tasnim shorno ");
*/

//calculation
/*
alert("calculation showing in the console");

console.log(40 + 30 + 20 - 10);//alert(40+30+20-10) result will show in the popup window
*/

//variables
/*
console.log('sanjida');
console.log(27);

let firstName = 'sanjida';
console.log(firstName);
*/

//data type
/*
console.log(true);
console.log("sanjida")
console.log(27)

let abc = true; //boolean dataType
console.log(abc);
let def = 'sanjida'; //string dataType
console.log(def);
let ghi = 27; //number dataType
console.log(ghi);


console.log(typeof true);
console.log(typeof 'sanjida');
console.log(typeof 27);

console.log(typeof abc);
console.log(typeof def);
console.log(typeof ghi);

//no need to use let in the second time when changing value of a variable
abc = 27
def = true
ghi = 'string'

console.log(typeof abc);
console.log(typeof def);
console.log(typeof ghi);

let jkl; //undefined dataType
console.log(jkl);
console.log(typeof jkl);

console.log(typeof null) //null dataType
*/

/*
there are two more data types:
Symbol(ES2015) dataType
Bigint(ES2020) dataType
*/

/*
//operators

//math operator
const now = 2021;
const ageShorno = now - 1995;
const ageDhonno = now - 1997;
console.log(ageShorno, ageDhonno);

console.log(ageShorno * 2, ageShorno / 10, 2 ** 3)

const firstName = 'Shorno';
const lastName = 'Tasnim';
console.log(firstName + ' ' + lastName);

//assignment operator
let x = 15 + 5;//20
x += 5;//25
x *= 3;//100
x--;
x++;
x++;
console.log(x);

//compare operator
console.log(ageShorno < ageDhonno);
console.log(ageDhonno >= 18)
console.log(now - 1995 >= now - 1997)

const y = ageDhonno >= 18;
*/

//operator precedence(google search-mdn operator precedence,then click-developer.mozilla.org)

/*
let x, y;
x = y = 20 - 10 - 5;//(-)operator execute from left to right & (=)operator from right to left
console.log(x, y);

const now = 2022;
let ageShorno = now - 1995;
let ageDhonno = now - 1997;

let averageAge1 = ageShorno + ageDhonno / 2;//output 39.5
console.log(averageAge1);

let averageAge2 = (ageShorno + ageDhonno) / 2;//output 26
console.log(averageAge2);
*/


//coding challenge #1
/*question:
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/
//answer
/*

let markWeight, markHeight, markBMI, johnWeight, johnHeight, johnBMI;
markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;

markBMI = markWeight / markHeight ** 2;
console.log(markBMI);
johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI);

let markHigherBMI1 = markBMI > johnBMI;
console.log(markHigherBMI1);

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
console.log(markBMI);
johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI);

let markHigherBMI2 = markBMI > johnBMI;
console.log(markHigherBMI2);

*/
/*

//string & Template Literals:

const firstName = 'shorno';
const job = 'programmer';
const birthYear = 1995;
const year = 2020;

//with string:

const shorno = "I'm " + firstName + ", a " + (year - birthYear) + "  years old " + job + '!'
console.log(shorno);

//with TL:

const shornoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
console.log(shornoNew);

//multiple lines with string:

console.log('string with \n\
multiple \n\
lines');

//multiple lines with Tl:

console.log(`string with
multiple
lines`);
*/

//if-else statement:

/*
let age = 19;
const isOldEnough = age >= 18;

//if (isOldEnough) {
//    console.log(`one can get driving license`);}

age = 16
if (age >= 18) {
    console.log(`one can get driving license`);
} else {
    const yearsLeft = 18 - age;
    console.log(`too young.wait another ${yearsLeft} years`);
}



const birthYear = 1995;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

//Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
*/

//solution;
/*
let markWeight, markHeight, markBMI1, markBMI2, johnWeight, johnHeight, johnBMI1, johnBMI2;
markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;

markBMI1 = markWeight / markHeight ** 2;
console.log(markBMI1);
johnBMI1 = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI1);

let markHigherBMI1 = markBMI1 > johnBMI1;
console.log(markHigherBMI1);

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI2 = markWeight / markHeight ** 2;
console.log(markBMI2);
johnBMI2 = johnWeight / johnHeight ** 2;
console.log(johnBMI2);

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);


if (markHigherBMI1) {
    console.log(`Mark's BMI ${markBMI1} is higher than John's ${johnBMI1}!`);
} else {
    console.log(`John's ${johnBMI1} BMI is higher than Mark's ${markBMI1}!`);
}

if (markHigherBMI2) {
    console.log(`Mark's BMI ${markBMI1} is higher than John's ${johnBMI1}!`);
} else {
    console.log(`John's BMI ${johnBMI1} is higher than Mark's ${markBMI1}!`);
}

*/

//type conversion
/*const inputYear = '1995';
console.log(inputYear + 25);
console.log(Number(inputYear) + 25);

console.log(Number('shorno'));
console.log(typeof NaN);
console.log(String(25) + 25);

//type coercion

console.log('I am ' + 25 + ' years old.');
console.log('25' - '10' - 3);
console.log('25' + '10' + 3);
console.log('25' * '2');
console.log('25' > 15);

let n = '1' + 1;
n = n - 1;
console.log(n);
*/


//truthy and falsy values
//five falsy values are: 0, '', undefined, null, NaN
//besides all are truthy values 

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('shorno'));
console.log(Boolean({}));
console.log(Boolean(""));

let money = 0;
if (money) {
    console.log("i have money");
} else {
    console.log('no money');
}

let manyMoney = 100;
if (manyMoney) {
    console.log("i have money");
} else {
    console.log('no money');
}

let height;
if (height) {
    console.log("height is defined");
} else {
    console.log('height is not defined');
}

*/
//equal and different operator

/*
const age = 18;

if (age === 18) console.log("I am adult");

if (age === 17) console.log("I am not adult");

const age2 = '18';

if (age2 === 18) console.log("I am adult2 (strict)");//'18'=string,18=number

if (age2 == 18) console.log("I am adult2 (loose0)");

prompt("what is your favourite number?");

const favourite = prompt("what is your favourite number? i will store it.")
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) console.log('cool!23 (loose)');
if (favourite === 23) console.log('cool!23(strict)');


const favourite2 = Number(prompt("what is your favourite number2? i will store it."))
console.log(favourite2);
console.log(typeof favourite2);

if (favourite2 === 25) {
    console.log('cool!25');
} else if (favourite2 === 5) {
    console.log('cool!5');
} else if (favourite2 === 3) {
    console.log('cool!3');
} else {
    console.log('not 25 or 5 or 3');
}

if (favourite2 !== 25) {
    console.log('why not 25? ');
}
*/

//logical operators
/*
const A = true;
const B = false;

console.log(A && B); // && = AND operator
console.log(A || B); // || = OR operator
console.log(!B); // ! = NOT operator

if (A && B) {
    console.log(`hi...`);
} else {
    console.log(`bye..`);
}

const C = true;

if (A && !B && C) {
    console.log(`hello....`);
} else {
    console.log(`goodbye..`);
}
*/
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
/*

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win!");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win!");
} else {
    console.log("Both win!");
}

//bonus1
const scoreDolphins1 = (97 + 112 + 101) / 3;
const scoreKoalas1 = (109 + 95 + 123) / 3;

console.log(scoreDolphins1, scoreKoalas1);

if (scoreDolphins1 > scoreKoalas1 && scoreDolphins1 >= 100) {
    console.log("Dolphins win!");
} else if (scoreKoalas1 > scoreDolphins1 && scoreKoalas1 >= 100) {
    console.log("Koalas win!");
} else {
    console.log("Both win!");
}


//bonus2
const scoreDolphins2 = (97 + 112 + 101) / 3;
const scoreKoalas2 = (109 + 95 + 106) / 3;

console.log(scoreDolphins2, scoreKoalas2);

if (scoreDolphins2 > scoreKoalas2 && scoreDolphins2 >= 100) {
    console.log("Dolphins win!");
} else if (scoreKoalas2 > scoreDolphins2 && scoreKoalas2 >= 100) {
    console.log("Koalas win!");
} else if (scoreDolphins2 === scoreKoalas2 && scoreDolphins2 >= 100 && scoreKoalas2 >= 100) {

    console.log("Both win!");
} else {
    console.log("no one win");
}

*/

//if-else and switch case
/*

const day = 'wednesday';

if (day == 'monday') {
    console.log('we will play');
} else if (day == 'tuesday') {
    console.log('we will sing');
} else if (day == 'wednesday' || day == 'thursday') {
    console.log('we will read');
} else if (day == 'friday') {
    console.log('we will write');
} else if (day == 'saturday' || day == 'sunday') {
    console.log('we will dance');
} else {
    console.log('not a valid day');
}


//switch case
const day2 = 'monday';

switch (day2) {
    case 'monday':
        console.log('we will play');
        break;
    case 'tuesday':
        console.log('we will sing');
        break;

    case 'wednesday':
    case 'thursday':
        console.log('we will read');
        break;
    case 'friday':
        console.log('we will write');
        break;
    case 'saturday':
    case 'sunday':
        console.log('we will dance');
        break;
    default:
        console.log('not a valid day');
}

*/
/*
//ternary operator

let age = 29;
age >= 18 ? console.log('I like to drink coffee') :
    console.log("I like to drink water");

//the above code can be written as below:
console.log(age >= 20 ? 'coffee' : 'water');

//in if-else:
if (age >= 18) {
    console.log('coffee1');
} else {
    console.log('water1');
}


//we can store this value in a variable

const drink = age >= 20 ? 'coffee2' : 'water2'
console.log(drink);

//in if-else:

let drink2;
if (age >= 30) {
    drink2 = 'coffee3';
} else {
    drink2 = 'water3';
} console.log(drink2);

console.log(`I like to drink ${age >= 38 ? 'coffee' : 'water'}`);


*/
/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§
Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉

*/


const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
console.log(tip);

/*
if (billValue >= 50 && billValue <= 300) {
    tip = billValue * .15;
} else {
    tip = billValue * .20;
} console.log(tip);
*/
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);