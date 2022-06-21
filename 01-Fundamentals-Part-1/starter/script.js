// Equality Operators == vs ===
const age = 18;

if (age === 18) console.log('You just became an adult. (strict)');

if (age == 18) console.log('You just became an adult. (loose)');

// As a general rule for a clean code, avoid using the loose
// operator == as much as you can.
// Always compare using the strict operator ===.

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
}
else if (favourite === 7) {
    console.log('7 is also a cool number!');
}
else if (favourite === 9) {
    console.log('9 is also a cool number!');
}
else {
    console.log('The number is not 23 neither 7 nor 9.');
}

if (favourite !== 23) console.log('Why not 23?');