/* In a small town the population is p0 = 1000 at the beginning of a year. The population regularly
increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the
town. How many years does the town need to see its population greater or equal to p = 1200
inhabitants? */

const nb_year = (p0, percent, aug, p) => {
  if (aug % 1 !== 0 || percent < 0 || p0 < 0 || p < 0) {
    return "please enter valid arguments";
  }
  let years = 0;
  while (p0 < p) {
    let newP0 = p0 + p0 * (percent / 100) + aug;
    years += 1;
    p0 = newP0;
  }
  return years;
};

// testing:
console.log(nb_year(1000, 2, 50, 1200)); // => 3
console.log(nb_year(1500, 5, 100, 5000)); // => 15
console.log(nb_year(1500000, 2.5, 10000, 2000000)); // => 10
console.log(nb_year(-50000, 2.5, 10000, 2000000)); // => please enter valid arguments
console.log(nb_year(1500000, 2.5, 10000.54, 2000000)); // => please enter valid arguments
