'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Ana';

//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// // console.log(a);

// // Hoisting - Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Ana';
// let job = 'teacher';
// const year = 1991;

// // Hoisting - Functions

// // console.log(addDec(2, 3));
// // console.log(addExpr(2, 4));
// // console.log(addArrow(2, 5));

// function addDec(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example
// console.log(undefined); // undefined is falsy
// if (!numProducts) deleteShoppingCart(); // The conditional expression works because hoisting gets the
// // var numProducts inside the if before reaching the var variable
// // due to hoisting, it gets var variables and will show them
// // as undefined which is a falsy value.
// // Avoid using var to declare your variables, also declare your variables always before the scope.

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// // Writing window in the console show all the properties for the window object.

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// // The This keyword in practice
// console.log(this);

// const calculateAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // Here it'll come up as undefined
// };
// calculateAge(1991);

// const calculateAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // Here this is coming up as window
// };
// calculateAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge(); // Here it comes up with the jonas object

// const maria = {
//   year: 2017,
// };

// maria.calcAge = jonas.calcAge;
// maria.calcAge(); // Proves that the this keyword always point to the object which is calling the method.

// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1: to preserve this and not let it come as undefined
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  // greet: () => {
  //   console.log(this);
  //   console.log(`Hey ${this.firstName}`);
  // },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();
