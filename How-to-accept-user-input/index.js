// How to accept user input https://www.youtube.com/watch?v=JeXqaKeJSRI&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=4

// 1. EASY WAY - window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// EASY WAY - window prompt
/*
let username;
username = window.prompt("What's your username?s");
console.log(username);
*/
//or this
/*
let username; = window.prompt("What's your username?s");
console.log(username);
*/

// PROFESSIONAL WAY = using HTML textbox
/*
let username;

document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
};
*/
//or
/*
let username;

document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = ` Hello ${username} !`;
  console.log(username);
};
*/
