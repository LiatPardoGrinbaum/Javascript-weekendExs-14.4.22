const lowestNums = (array) => {
  let num1 = Math.min(...array);
  array.splice(array.indexOf(num1), 1);
  let num2 = Math.min(...array);

  return num1 + num2;
};

const arr = [19, 5, 42, 2, 77];

console.log(lowestNums(arr));
