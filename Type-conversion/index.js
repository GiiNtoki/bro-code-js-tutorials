// https://www.youtube.com/watch?v=jLRnuVHwHKk&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=5

// type conversion = change the datatype of a value to another
//                    (strings, number, boolean)

//let age = window.prompt("How old are your?");
/*
age = Number(age); // by using the Number object it will change the value from string to a number
age += 1; //the number "1" here is a string and changed to a number using the "Number" object.
console.log(age, typeof age);

// another example

let x = "0"; //if leave as blank it will still show as 0 example let x = ""; this will be 0 `number`
let y = "0"; //if leave as blank it will 
let z = "0"; // as long as there is a value here it will always be "true" | if the boolean has no value (blank) it will be false

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

// if the variable is declared but not assign a value
// NUMBER: NaN = `number` | NaN means (not a number)
// STRING: undefined string
// BOOLEAN: false `boolean`

function add7(num1) {
  return num1 + 7;
}
console.log(add7(10));
//

function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(10, 6));

//
const example1 = "javaSCRIPT";
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(capitalize(example1));
//

function lastLetter(string) {
  return string.slice(-1);
}
console.log(lastLetter("Javascript"));
