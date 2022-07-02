// Looping Arrays, Breaking and Continuing
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonasArray
    console.log(jonasArray[i], typeof jonasArray[i]);

    // Filling types array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

// Calculating ages and adding in an array using a loop
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log('---- ONLY STRINGS ----');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('---- BREAK WITH NUMBERS ----');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}