//Ex2.6 - Years and Centuries
// The first century spans from the year 1 up to and including the year 100, The second - from the
// year 101 up to and including the year 200, etc.
// Task :
// Given a year, return the century it is in.

const centuryOfYear = (year) => {
  if (year % 100 === 0) {
    return year / 100;
  } else {
    return Math.floor(year / 100 + 1);
  }
};

//testing:
console.log(centuryOfYear(1705)); //should return 18
console.log(centuryOfYear(1900)); //should return 19
console.log(centuryOfYear(1601)); //should return 17
console.log(centuryOfYear(2000)); //should return 20
console.log(centuryOfYear(100)); //should return 1
console.log(centuryOfYear(101)); //should return 2
