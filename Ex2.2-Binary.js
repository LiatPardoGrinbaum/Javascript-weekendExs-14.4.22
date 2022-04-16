/* Given an array of ones and zeroes, convert the equivalent binary value to an integer. */

const binaryToInt = (array) => {
  array.reverse();
  let integer = 0;
  for (let i = 0; i < array.length; i++) {
    integer += 2 ** i * array[i];
  }
  return integer;
};

//testing:
console.log(binaryToInt([0, 0, 0, 1])); // should return 1
console.log(binaryToInt([0, 0, 1, 0])); // should return 2
console.log(binaryToInt([1, 1, 1, 1])); // should return 15
console.log(binaryToInt([1, 0, 1, 0, 1, 0, 1])); // should return 85
console.log(binaryToInt([1, 1, 0, 0, 0, 1, 0])); // should return 98
console.log(binaryToInt([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // should return 1023
