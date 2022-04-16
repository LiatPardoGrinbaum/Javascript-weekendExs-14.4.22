/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
a function that determines whether a string that contains only letters is an isogram. Assume the
empty string is an isogram. Ignore letter case. */

const isogram = (str) => {
  if (!/^[A-Za-z]*$/.test(str)) {
    return "please enter a string contains only letters";
  }
  const arr = str.toLowerCase().split("");
  bool = true;
  arr.forEach((char, idx) => {
    if (arr.indexOf(char, idx + 1) !== -1) {
      bool = false;
    }
  });
  return bool;
};

// testing:
console.log(isogram("Dermatoglyphics")); // =>true
console.log(isogram("")); // => empty string - true
console.log(isogram("aba")); // => false
console.log(isogram("abababab")); // => false
console.log(isogram("AbCde")); // => true
console.log(isogram("Ab1Cde")); // => please enter a string contains only letters
console.log(isogram("Ab1 Cde")); // => please enter a string contains only letters
