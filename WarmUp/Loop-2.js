// Print all even numbers from the array

function countNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
let arr = [2, -6, 4, 8, 1, -9];
let result = countNegativeNumbers(arr);
console.log("Result:", result); // Output: 2

// Find the smallest number in the array

function findSmallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let arr2 = [2, -6, 4, 8, 1, -9];
let result2 = findSmallest(arr2);
console.log("Result:", result2); // Output: -9

// Find the largest number in the array

function findLargest(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
let arr3 = [2, -6, 4, 8, 1, -9];
let result3 = findLargest(arr3);
console.log("Result:", result3); // Output: 8
