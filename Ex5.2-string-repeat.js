/* Ex5.2 - String Repeat
Write a function called repeat_str which repeats the given string src exactly count times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" */

const repeatStr = (times, str) => {
  let newStr = "";
  for (let i = 0; i < times; i++) {
    newStr += str;
  }
  return newStr;
};

// testing:
console.log(repeatStr(6, "I")); // ==> "IIIIII"
console.log(repeatStr(5, "Hello")); // ==> "HelloHelloHelloHelloHello"
console.log(repeatStr(4, "Hi")); // ==> "HiHiHiHi"
