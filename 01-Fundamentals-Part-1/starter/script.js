// The Ternary Operator
const age = 17;
age >= 18 ? console.log('I like drinking wine.') : console.log('I like drinking water.');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
}
else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like drinking ${age >= 18 ? 'wine' : 'water'}.`);