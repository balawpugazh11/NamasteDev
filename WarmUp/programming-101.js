var greeting = "Hello, World!"; // var is function-scoped and can be redeclared and updated

let name = "Alice"; // let is block-scoped and can be updated but not redeclared within the same scope

const PI = 3.14159; // const is block-scoped and cannot be updated or redeclared. It must be initialized at the time of declaration.

console.log(greeting); // Output: Hello, World!
console.log("My name is " + name + "."); // Output: My name is Alice.
console.log("The value of PI is approximately " + PI + "."); // Output: The value of PI is approximately 3.14159.

// Example usage of the add function
function add(a, b) {
  return a + b;
}
var sum = add(5, 10);
console.log("The sum of 5 and 10 is: " + sum);

function multiply(x, y) {
  return x * y;
}
var product = multiply(4, 7);
console.log("The product of 4 and 7 is: " + product);

function greet(name) {
  return "Hello, " + name + "!";
}

var greetingMessage = greet("Bob");
console.log(greetingMessage); // Output: Hello, Bob!

function isEven(num) {
  return num % 2 === 0;
}
var number = 8;
if (isEven(number)) {
  console.log(number + " is even."); // Output: 8 is even.
} else {
  console.log(number + " is odd.");
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
var result = factorial(5);
console.log("The factorial of 5 is: " + result); // Output: The factorial of 5 is: 120
