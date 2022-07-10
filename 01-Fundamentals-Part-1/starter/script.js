// ASSIGNMENT: Function Declarations vs. Expressions
// The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population.
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100.
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console.
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations).

// Function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const IndiaPopulation = 1380;
const ChinaPopulation = 1441;
const USAPopulation = 329;

console.log(
  percentageOfWorld1(IndiaPopulation),
  percentageOfWorld1(ChinaPopulation),
  percentageOfWorld1(USAPopulation)
);

// Function expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percBrazil = percentageOfWorld2(212.6);
const percCanada = percentageOfWorld2(38.01);
const percUK = percentageOfWorld2(67.22);

console.log(percBrazil, percCanada, percUK);
