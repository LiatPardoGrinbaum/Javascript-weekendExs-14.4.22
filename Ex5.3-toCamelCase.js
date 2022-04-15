/* Complete the method/function so that it converts dash/underscore delimited words into camel
casing. The first word within the output should be capitalized only if the original word was
capitalized (known as Upper Camel Case, also often referred to as Pascal case). */

const toCamelCase = (delimitedWord) => {
  const arr = delimitedWord.split(delimitedWord.indexOf("-") === -1 ? "_" : "-");
  const arr2 = [];
  arr.forEach((word, idx) => {
    if (idx === 0) {
      arr2.push(word);
    } else {
      newWord = word[0].toUpperCase() + word.slice(1, word.length);
      arr2.push(newWord);
    }
  });
  return arr2.join("");
};

//testing:
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("this_is_another_example"));
