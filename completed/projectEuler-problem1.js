// _NAME: Multiples of 3 and 5
// _LINK: https://projecteuler.net/problem=1
// _CATEGORY: Integers

/**

If we list all the natural numbers below 10 that are 
multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

let input = 1000;
var solve = function(num) {
  let output = 0;
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      output += i;
    }
  }

  return output;
};

console.log(solve(input));
