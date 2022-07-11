// ASSIGNMENT: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'.
// 2. Log to the console whether the array has 4 elements or not (true or false).
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values.

const populations = [83.24, 45.38, 144.1, 220.9];
const percentages = [];

console.log(populations);
console.log(populations.length === 4);

function percentageOfWorld1(populations) {
  return (populations / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
  percentages.push(percentageOfWorld1(populations[i]));
}

console.log(percentages);
