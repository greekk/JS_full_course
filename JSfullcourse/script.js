let variabe = "My variable";
let num1 = 30;
let num2 = 20;
console.log('+', num1 + num2);
console.log('-', num1 - num2);
console.log('*', num1 * num2);
console.log('/', num1/2);
console.log('%', num1 % 3);
console.log('++', ++num2);
console.log("--", --num1);

let str1 = "My first string";
let str2 = "My second string";
console.log(str1 + " " + str2);

console.log(34 - 3*6);
console.log(20 + 65/4 - 12 * 2 <= 35);

let personAge = 18;
let message = personAge < 18 ? "Person is not coming of age" : "Person is coming of age";   
console.log(message);

function calculateAge(currentYear, yearOfMade){
    return currentYear - yearOfMade;
}

function checkAndLogAge(currentYear, yearOfMade, clause){
    let log = "than " + clause
    calculateAge(2018, 2017) <= clause
    ? log = "Less or equal " + log
    : log = "Greater " + log
    console.log(log);
}

checkAndLogAge(2018, 2017, 2)
