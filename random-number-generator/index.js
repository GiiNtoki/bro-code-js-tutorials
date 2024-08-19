// RANDOM NUMBER GENERATOR

/*
const minimum = 1;
const maximum = 6;

let randomNumber = Math.floor(Math.random() * maximum) + minimum;

console.log(randomNumber);
*/

const myBtn = document.getElementById("myBtn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const minimum = 1;
const maximum = 6;

let randomNumber1;
let randomNumber2;
let randomNumber3;

myBtn.onclick = function () {
  randomNumber1 = Math.floor(Math.random() * maximum) + minimum;
  randomNumber2 = Math.floor(Math.random() * maximum) + minimum;
  randomNumber3 = Math.floor(Math.random() * maximum) + minimum;
  label1.textContent = randomNumber1;
  label2.textContent = randomNumber2;
  label3.textContent = randomNumber3;
};
