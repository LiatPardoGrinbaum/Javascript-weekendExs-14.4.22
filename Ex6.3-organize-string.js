const longest = (str1, str2) => {
  let combineStr = (str1 + str2).toLowerCase();
  let organizedStr = "";
  for (let char of combineStr) {
    if (organizedStr.includes(char) === false) {
      organizedStr += char;
    }
  }
  return organizedStr.split("").sort().join("");
};
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
