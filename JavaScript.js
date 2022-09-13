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


