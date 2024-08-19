const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");
let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    result.textContent = `You are TOO OLD to enter this site`;
  } else if (age >= 18) {
    result.textContent = `You are old enough to enter this site`;
  } else if (age <= 0) {
    result.textContent = `You can't enter. You were just born`;
  } else {
    result.textContent = `You must be 18+ to enter this site`;
  }
};
