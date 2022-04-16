/* Ex2.1 - Sum of lowest numbers
Create a function that returns the sum of the two lowest positive numbers given an array of
minimum 4 positive integers. No floats or non-positive integers will be passed. */

const lowestNums = (array) => {
  for (let num of array) {
    if (num <= 0 || num % 1 !== 0) {
      return "please enter a valid array";
    }
  }
  let num1 = Math.min(...array);
  array.splice(array.indexOf(num1), 1);
  let num2 = Math.min(...array);

  return num1 + num2;
};

// testing:
console.log(lowestNums([19, 5, 42, 2, 77])); // => 7
console.log(lowestNums([0, 1, 2])); // => please enter a valid array
console.log(lowestNums([2, 4, 6, 0.5])); // => please enter a valid array
