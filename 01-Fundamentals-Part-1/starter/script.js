/* let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javaScriptIsFun = 'YES';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2001;
console.log(typeof year);

// This is a bug, because null will come up with as an object. However, it is a kind of undefined.
console.log(typeof null);
*/

// let, const and var
// We use let to declare variables that can be changed later.
// See example below:
let age = 30;
// Reasssigning a new value to the variable
age = 31;

// const: we assign to variables which are not supposed to change at any point.
// Example:
const birthYear = 1991;
// birthYear = 1990; // This will generate an Uncaught TypeError.

// Also, it is not possible to declare an empty const variable, i.e. a const which was not initialized.
// Example:
// const job; // This will generate an Uncaught SyntaxError.

// As BEST PRACTICE, use const by default
// and only use let if you are sure that the variable will change in the future.

// var should be completely avoided. It works in the same way as let.
var job = 'programmer';
job = 'teacher';
