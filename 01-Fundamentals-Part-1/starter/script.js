// Making Decisions: if / else Statements
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving.');
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

// Considering births from 1901:
const birthYear = 2001;

let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}

console.log(century);