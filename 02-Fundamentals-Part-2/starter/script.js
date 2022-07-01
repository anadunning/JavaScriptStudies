// Object Methods
// object
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // Function expression - obs.: function declaration doesn't work here
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // },

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;   // Using this keyword, we don't need to pass the parameter anymore.
    // },                                  //  this keyword gets the value from the object birthYear

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver\'s licence}.`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas['calcAge']());

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's licence."
console.log(jonas.getSummary());