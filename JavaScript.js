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

//if-else statement
let age = 19;
const isOldEnough = age >= 18;

/*if (isOldEnough) {
    console.log(`one can get driving license`);
}*/

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