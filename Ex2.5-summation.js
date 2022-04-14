//Ex2.3- Summation
// Write a program that finds the summation of every number from 1 to num. The number will
//always be a positive integer greater than 0.

const summation = (num) => {
  let sum = 0;
  for (i = 1; i < num + 1; i++) {
    sum += i;
  }
  return sum;
};

//testing:
console.log(summation(2)); //should return 3
console.log(summation(5)); //should return 15
console.log(summation(8)); //should return 36
console.log(summation(10)); //should return 55
console.log(summation(15)); //should return 120
