// ASSIGNMENT: Arrow Function
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

// Arrow Function
const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};

const IndiaPopulation = 1380;
const ChinaPopulation = 1441;
const USAPopulation = 329;

console.log(
  percentageOfWorld3(IndiaPopulation),
  percentageOfWorld3(ChinaPopulation),
  percentageOfWorld3(USAPopulation)
);

const percBrazil = percentageOfWorld3(212.6);
const percCanada = percentageOfWorld3(38.01);
const percUK = percentageOfWorld3(67.22);

console.log(percBrazil, percCanada, percUK);
