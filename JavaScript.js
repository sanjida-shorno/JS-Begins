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








