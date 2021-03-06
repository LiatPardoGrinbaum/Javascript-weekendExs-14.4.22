/* You might know some pretty large perfect squares. But what about the NEXT one?
Complete the findNextSquare method that finds the next integral perfect square after the one
passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is
also an integer. */

const findNextSquare = (square) => {
  let nextSquare = (Math.sqrt(square) + 1) ** 2;
  return nextSquare % 2 === 0 ? nextSquare : -1;
};

//testing:
console.log(findNextSquare(121)); // should return 144
console.log(findNextSquare(625)); // should return 676
console.log(findNextSquare(26)); // should return -1
console.log(findNextSquare(88)); // should return -1
