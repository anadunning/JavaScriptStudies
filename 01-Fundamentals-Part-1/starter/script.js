// Type conversion (Manually)
const inputYear = '1991';
console.log(Number(inputYear), inputYear);

console.log(Number(inputYear) + 18);
console.log(Number('John'));

console.log(typeof NaN); // NaN is a kind of number, but invalid.
console.log(String(23), 23);

// Type coercion
// The number 25 is converted automatically to string.
console.log('I am ' + 25 + ' years old.');

// The minus operator triggers the coercion and the strings are converted to numbers.
console.log('23' - '10' - 3);

// The plus operator converts the number 3 to string and concatenates the three strings.
console.log('23' + '10' + 3);

// The multiplication operator converts the string to number.
console.log('23' * '2');

// The same for dividing
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);
