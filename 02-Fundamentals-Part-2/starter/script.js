// Reviewing Functions
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear); // Function being called inside a function
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement; // The function will finish here in the return.
                          //  So, if you add the console.log after the return nothing will displayed in the console as the code won't be reached.
    }
    else {
        console.log(`${firstName} has already retired.`);  // console.log needs to come before the return in this case here.
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'John'));
console.log(yearsUntilRetirement(1950, 'Mike'));