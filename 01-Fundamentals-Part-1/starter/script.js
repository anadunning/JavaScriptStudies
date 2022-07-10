// ASSIGNMENT: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice.

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const describePopulation = (country, population) => {
  return `${country} has ${population} million people which is about ${percentageOfWorld1(
    population
  )} % of the world.`;
};

const describeIndia = describePopulation("India", 212.6);
const describeChina = describePopulation("China", 1441);
const describeUSA = describePopulation("The USA", 329);
const describeBrazil = describePopulation("Brazil", 212.6);
const describeCanada = describePopulation("Canada", 38.01);
const describeUK = describePopulation("The UK", 67.22);

console.log(describeIndia);
console.log(describeChina);
console.log(describeUSA);
console.log(describeBrazil);
console.log(describeCanada);
console.log(describeUK);
