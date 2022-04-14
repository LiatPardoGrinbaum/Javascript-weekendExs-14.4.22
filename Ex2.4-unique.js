const findUniq = (numArray) => {
  let uniq = 0;
  numArray.forEach((num, idx) => {
    if (numArray[idx] !== numArray[idx + 1] && numArray[idx] !== numArray[idx - 1]) {
      uniq = num;
    }
  });
  return uniq;
};

//testing:
console.log(findUniq([2, 3, 3, 3])); // should return 2
console.log(findUniq([5, 5, 5, 5, 1])); // should return 1
console.log(findUniq([2, 2, 5, 2, 2])); // should return 5
