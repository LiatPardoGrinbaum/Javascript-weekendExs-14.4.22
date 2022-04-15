/* Ex4.1 - Fibonacci -
“Write a function to return an n element in Fibonacci sequence” is one of the most common
questions you can hear during the coding challenge interview part. In this blogpost I’m going to
walk through the two of the most typical solutions for this problem and also cover a dreadful (for
most of novice developers) topic of time complexity.
So what is a Fibonacci sequence? According to Wikipedia :
“In mathematics, the Fibonacci numbers are the numbers in the following integer sequence,
called the Fibonacci sequence, and characterized by the fact that every number after the first
two is the sum of the two preceding ones.”
Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like
this:
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
or this:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, … */

//my solution:
// i chose the starting point with 1.
// assumption: n is an integer and is > = 1
const fibonacci = (n) => {
  let fibCurrent = 0;
  if (n <= 1) {
    return 1;
  } else {
    let fibMinus2 = 1;
    let fibMinus1 = 1;
    for (i = 2; i < n; i++) {
      fibCurrent = fibMinus1 + fibMinus2;
      fibMinus2 = fibMinus1;
      fibMinus1 = fibCurrent;
    }
  }
  return fibCurrent;
};

console.log(fibonacci(7)); // ==> 13
console.log(fibonacci(10)); // ==> 55
console.log(fibonacci(13)); // ==> 233

//another different solution when I created the sequence with numbers until n number (returning an array but can also return the number itself):
const fibonacci2 = (n) => {
  let fibArray = [1, 1];
  if (n <= 1) {
    return 1;
  } else {
    for (i = 2; i < n; i++) {
      fibNum = fibArray[i - 1] + fibArray[i - 2];
      fibArray.push(fibNum);
    }
  }
  return fibArray;
  //could also return the nth number by: return fibArray[n-1]
};

console.log(fibonacci2(13));
