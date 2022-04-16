/* This time no story, no theory. The examples below show you how to write function
accum :
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z . */

const getString = (str) => {
  const arr = str.split("");
  const newArr = [];
  arr.forEach((letter, idx) => {
    let letterStr = "";
    for (let x = 0; x < idx + 1; x++) {
      if (x === 0) {
        letterStr = letter.toUpperCase();
      } else {
        letterStr += letter.toLowerCase();
      }
    }
    newArr.push(letterStr);
  });
  return newArr.join("-");
};

//testing:
console.log(getString("abcd")); // ==> A-Bb-Ccc-Dddd
console.log(getString("RqaEzty")); // ==> R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy
console.log(getString("cwAt")); // ==> C-Ww-Aaa-Tttt
