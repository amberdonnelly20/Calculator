// Enter a description of this program here.

// Simple arithmetic calculator app
// Move global functions into an object literal
// Use bracket notation to invoke the appropriate method

const calculator = {
  add(a, b) {
    return Number(a) + Number(b);
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
  remainder(a, b) {
    return a % b;
  }
};

console.log(calculator.add(1, 5));

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const select = document.querySelector("select");

form.addEventListener("submit", function(event) {
  //Prevent default browser behavior.  DON'T submit
  event.preventDefault();

  console.log(num1.value, num2.value, select.value);
});
