// Logical Operators
const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasGoodVision;
const isTired = false;
console.log(hasDriversLicence && hasGoodVision && isTired);

if (shouldDrive && !isTired) {
    console.log('Sarah is able to drive!');
}
else {
    console.log('Someone else should drive.');
}