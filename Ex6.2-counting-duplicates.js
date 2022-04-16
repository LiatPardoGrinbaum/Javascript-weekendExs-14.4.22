/* Write a function that will return the count of distinct case-insensitive alphabetic characters and
numeric digits that occur more than once in the input string. The input string can be assumed to
contain only alphabets (both uppercase and lowercase) and numeric digits. */

// note: I solved this function with and object showing the count of each letter/digit.
const countDuplicates = (str) => {
  const arr = str.toLowerCase().split("");
  const obj = {};

  arr.forEach((letter) => {
    obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  });
  return obj;
};

// testing:
console.log(countDuplicates("abcde")); // => { a: 1, b: 1, c: 1, d: 1, e: 1 } (each letter appear once (no repeating))
console.log(countDuplicates("aabBcde")); // => { a: 2, b: 2, c: 1, d: 1, e: 1 }
console.log(countDuplicates("Indivisibilities")); // => { i: 7, n: 1, d: 1, v: 1, s: 2, b: 1, l: 1, t: 1, e: 1 }
console.log(countDuplicates("aA11")); // => { '1': 2, a: 2 }
