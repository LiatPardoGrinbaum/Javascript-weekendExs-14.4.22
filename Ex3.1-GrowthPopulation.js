const nb_year = (p0, percent, aug, p) => {
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
