/* Ex5.7 - shortest words
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types. */

const shortest = (str) => {
  const arrWords = str.split(" ");
  const min = Math.min(...arrWords.map((word) => word.length));
  return min;
};
console.log(shortest("Hello world this is me")); // => 2
console.log(shortest("good morning")); // => 4
console.log(shortest("abcd anfnfn aadda ggg eeeeee")); // => 3
