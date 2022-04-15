/* Write a function to convert a name into initials. This kata strictly takes two words with one space
in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H */

const toInitialName = (str) => {
  const arr = str.split(" ");
  const newArr = arr.map((word) => {
    return word[0];
  });
  let initial = newArr.join(".");
  return initial;
};

// testing:
console.log(toInitialName("Liat Pardo Grinbaum")); // ==> L.P.G
console.log(toInitialName("Sam Harris")); // ==> S.H
console.log(toInitialName("Freddie Mercury")); // ==> F.M
