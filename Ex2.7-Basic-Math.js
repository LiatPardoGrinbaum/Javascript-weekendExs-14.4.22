// Ex2.7 - Basic Math
// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.

const operations = (operation, value1, value2) => {
  let result = 0;
  switch (operation) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value1 / value2;
      break;
    default:
      console.log("Please choose a basic math operation and 2 numbers.");
  }
  return result;
};

//testing:
console.log(operations("+", 4, 7)); //should return 11
console.log(operations("-", 15, 18)); //should return -3
console.log(operations("*", 5, 5)); //should return 25
console.log(operations("/", 49, 7)); //should return 7
