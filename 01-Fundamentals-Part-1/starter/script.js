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

const jonas = {
  firstName: "John",
  lastName: "Smith",
};

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);
