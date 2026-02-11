//Sum of Two Integers
function sum(a, b) {
  let add = a + b;
  console.log(add);
}
sum(5, 3);

//Square of a Number
function square(x) {
  return x * x;
}
let result = square(3);
console.log("The square is:", result);

//Check Voting Eligibility
let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

//Check if a Number is Even or Odd

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}
checkEvenOrOdd(18);
checkEvenOrOdd(5);
