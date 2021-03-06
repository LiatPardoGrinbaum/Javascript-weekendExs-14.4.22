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

//------------------------------------------------------------
//another way, using aritmetic seria

const summation2 = (num) => {
  let sum = (num / 2) * (num + 1);
  return sum;
};

//testing:
console.log("second solution:");
console.log(summation2(2)); //should return 3
console.log(summation2(5)); //should return 15
console.log(summation2(8)); //should return 36
console.log(summation2(10)); //should return 55
console.log(summation2(15)); //should return 120
