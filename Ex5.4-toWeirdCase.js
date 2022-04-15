/* Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
string with all even indexed characters in each word upper cased, and all odd indexed
characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
index is even, therefore that character should be upper cased.
The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
be present if there are multiple words. Words will be separated by a single space(' '). */

const toWeirdCase = (str) => {
  const wordsArr = str.split(" ");
  const wordsArrWeird = [];
  wordsArr.forEach((word) => {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        newWord += word[i].toUpperCase();
      } else {
        newWord += word[i].toLowerCase();
      }
    }
    wordsArrWeird.push(newWord);
  });
  let weirdStr = wordsArrWeird.join(" ");
  return weirdStr;
};

//testing:
console.log(toWeirdCase("String")); // ==> StRiNg
console.log(toWeirdCase("Weird string case")); // ==> WeIrD StRiNg CaSe
