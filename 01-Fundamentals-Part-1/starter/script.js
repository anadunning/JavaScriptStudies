// ASSIGNMENT: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

const myCountry = {
  country: "Brazil",
  capital: "Brasilia",
  language: "Portuguese",
  population: 212.6,
  neighbours: [
    "Argentina",
    "Paraguai",
    "Uruguai",
    "Peru",
    "Bolivia",
    "Colombia",
    "Venezuela",
    "Guiana Inglesa",
    "Suriname",
    "Guiana Francesa",
  ],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

const newPop = myCountry.population + 2;
console.log(newPop);

const lessPop = myCountry["population"] - 2;
console.log(lessPop);

// Jonas's answer:
myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry["population"]);
