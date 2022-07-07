// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

console.log(temperatures[2]);

const calcTempAmplitude = function () {
  let max = -100000;

  for (let i = 0; i < temperatures.length; i++) {
    console.log(temperatures);
  }
};

// if (temperatures[i] > max) {
//   max = temperatures[i];
//   return max;
// }
