/* Number of people in the bus
There is a bus moving in the city, and it takes and drop some people in each bus stop.
You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two
items which represent number of people get into bus (The first item) and number of people get
off the bus (The second item) in a bus stop.
Your task is to return number of people who are still in the bus after the last bus station (after
the last array). Even though it is the last bus stop, the bus is not empty and some people are still
in the bus, and they are probably sleeping there :D
Take a look on the test cases.
Please keep in mind that the test cases ensure that the number of people in the bus is always
>= 0. So the return integer can't be negative.
The second value in the first integer array is 0, since the bus is empty in the first bus stop. */

//solution
const peopleOnTheBus = (array) => {
  if (array === null || array.length === 0) {
    return "not a valid input";
  }
  if (array[0][1] !== 0) {
    return "invalid input. the bus is empty in the first bus stop";
  }
  let peopleLeft = 0;
  array.forEach((list) => {
    peopleLeft += list[0] - list[1];
  });

  return peopleLeft;
};

//testing1
const array1 = [
  [1, 0],
  [1, 0],
  [1, 1],
  [1, 1],
  [0, 1],
  [1, 1],
];
console.log(peopleOnTheBus(array1)); ///=> 1

//testing2
const array2 = [
  [3, 0],
  [1, 2],
  [0, 2],
  [4, 2],
];

console.log(peopleOnTheBus(array2)); ///=> 2

//testing3 - invalid input
const array3 = [
  [3, 2],
  [1, 2],
  [0, 2],
  [4, 2],
];

console.log(peopleOnTheBus(array3)); ///=> invalid input. the bus is empty in the first bus stop
