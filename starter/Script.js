// let js = "amazing"; /*Use Colon at the end ';' it is a good practice*/
// // if (js === "amazing") alert("JavaScript is FUN!");
// console.log(40 + 7 + 4);
//
// console.log("Sourabh");
// console.log(23);
//
// let firstName = "Sourabh";
// console.log(firstName);

// # DataTypes #

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof javaScriptIsFun);
// console.log(typeof 45);
// console.log(typeof "Jonas");
javaScriptIsFun = 45;
console.log(typeof javaScriptIsFun);

javaScriptIsFun = "YES!";

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null);

/* Conversion and Coercion: 20*/

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
// Herer we are converting string input into a number and then adding into it. Else we know string adding will
// make in concatenating
console.log(Number(inputYear), +10);

console.log(Number('Jonas')); /*This will cause an error since it's not a String number to convert it into Number*/

// Proof:

console.log(typeof NaN);

console.log(String(23), 23)

// Here in output, Purple is String while, White is Number

// Type coercion

/*See in notebook*/
console.log("I'm" + 23 + 'year old');
console.log('23' + '10' + '3');
console.log('23' - '10' - '3');

/* Truthy and falsy*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money){
    console.log("DOn't spend it all ;)")
}else{
    console.log('You shouldn get a job)');
}


// == vs ===

/*Here = is assignment operator*/
/*Here == is comparing operator, but not strictly checking the type of the variable*/
/*Here === is coparing operator but its strictly, the data type should Also be same, mean, 18 (int) and 18 (as
 string) is not equal, but in case of '==' its true*/

const age = 18;
if (age == 18){
    console.log('You just became an adult :D');
} else{
    console.log('You are not an adult :C')
}

if (age === 18){
    console.log('Yes 18 is string too')
}

const myAge = String(prompt("What is your age?"));
console.log(myAge);
console.log(typeof myAge);

if(myAge === 18){
    console.log("Congrates you can vote");
}else{
    console.log(`Seems your age is ${myAge} this?`);
}

let hasDriverLicense = true;
let hasGoodVision = true;

console.log(hasGoodVision && hasDriverLicense);
console.log(hasGoodVision || hasDriverLicense);

hasGoodVision = false;

console.log(hasGoodVision && hasDriverLicense);
console.log(hasGoodVision || hasDriverLicense);

hasDriverLicense = false;

console.log(hasGoodVision && hasDriverLicense);
console.log(hasGoodVision || hasDriverLicense);




