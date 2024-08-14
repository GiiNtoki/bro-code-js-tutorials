// for basic output use console.log
/*
console.log("Hello");
console.log("i like pizza!");
*/

// to create an allert use windoe.alert
/*
window.alert("This is an alert!");
window.alert("I like pizza!");
*/

// to change a text content first select the html element by using document.getElementById(ID-value) then >> to change the content use .textContent then >>> input the new text i.e. = "Hello"
/* 
document.getElementById("myH1").textContent = "Hello";
document.getElementById("myP").textContent = "I like pizza!";
*/

// this is a comment
/* 
    This is a comment for very long comment
*/

// variables var, let, const
// 1. declaration let x;
// 2. assignment x = 100
/*
let age = 25;
let price = 15;
let gpa = 2.1;

console.log(age);
console.log(price);
console.log(gpa); `
*/

//using a template literal

/*
console.log(typeof gpa);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(` Your gpa is: ${gpa}`);

let firstName = "Chester";
console.log(typeof firstName);
console.log(firstName);
console.log(`Your name is ${firstName}`);

let favoriteFood = "Pizza";
console.log(`You like  ${favoriteFood}`);

let email = "Gintoki@gmail.com";
console.log(`Your email is ${email} `);
*/

// booleans is either true or false
/*
let online = false;
let forSale = true;

console.log(typeof online);
console.log(`Bro is online: ${online}`);
console.log(`is this casr for sale: ${forSale}`);
*/

// this is another example
/*
let fullName = "Gintoki Sakata";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent =`Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age}`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
*/

// arithmetic operators start

// arithmetic operators = operands (values, variables, etc.)
//                        operators (+ - * /)
//                        ex 11 = x + 5;

//let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//students = students % 2;
//let extraStudents = students % 3;

// can use this expression instead for shorter and cleaner code

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//increment and decrement operator
// to increase a variable by only 1 you may use the expression ++
// to decrease a variable by only 1 you may use the expression --
// student++;
// student--;

/* operator precedence
1. parenthesis ()
2. exponents
3. multiplication | division | modulo
4. addition & subtraction
*/

//example
//let result = 1 + 2 * 3 + 4 ** 2;
//let result = 12 % 5 + 8 /2;
//let result = 6 / 2 ** (2 + 5);
//console.log(result);

//end of arithmetic operators