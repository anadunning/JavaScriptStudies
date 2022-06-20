// Strings and Template Literals
const firstName = 'John';
const job = 'engineer';
const birthYear = 1990;
const year = 2030;

const john = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + ".";
console.log(john);

// Using Template literal - using the tick ` and dolar sign $ and curly braces {}
const johnNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(johnNew);

console.log(`Just a regular string...`);
console.log('String with \nmultiple \nlines.'); // With the usual quotation marks, we need to use \n to go to the next line.

console.log(`String with 
multiple
lines.`);   // With template literal, we can break the line and the string will accept that.