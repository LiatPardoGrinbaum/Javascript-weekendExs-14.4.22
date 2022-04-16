/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
longest possible, containing distinct letters,
each taken only once - coming from s1 or s2. */

const longest = (str1, str2) => {
  if (!/^[A-Za-z]*$/.test(str1) || !/^[A-Za-z]*$/.test(str2)) {
    return "please enter a string contains only letters";
  }
  let combineStr = (str1 + str2).toLowerCase();
  let organizedStr = "";
  for (let char of combineStr) {
    if (organizedStr.includes(char) === false) {
      organizedStr += char;
    }
  }
  return organizedStr.split("").sort().join("");
};

// testing:
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")); // => abcdefklmopqwxy
console.log(longest("abcdefg", "efghijklm")); // => abcdefghijklm
console.log(longest("ab123cdefg", "efghijklm")); // => please enter a string contains only letters
