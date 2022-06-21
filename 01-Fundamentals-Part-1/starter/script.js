// Truthy and Falsy
// 5 falsy values: 0, '', undefined, null, NaN

// When checking with Boolean, all these will be false.
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// Any string will be a true value, as well as for an empty object.
console.log(Boolean('John'));
console.log(Boolean({}));

const money = 0;  // Zero is converted to false.
if (money) {
    console.log("Don't spend it all.");
}
else {
    console.log("You should get a job.");
}

let height = 0; // The value 0 is accepted for height, but it'll come up as false.

if (height) {
    console.log("Yes! Height is defined.");
}
else {
    console.log("Height is UNDEFINED!");
}