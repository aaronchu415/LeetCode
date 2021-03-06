// _NAME: Even Fibonacci numbers
// _LINK: https://projecteuler.net/problem=2
// _CATEGORY: Integer

/**

Each new term in the Fibonacci sequence is 
generated by adding the previous two terms. 
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci 
sequence whose values do not exceed four million, 
find the sum of the even-valued terms.
*/

let input = 10;
var solve = function(num) {
  let output = 2;

  let prev1 = 1;
  let prev2 = 2;
  let currNum = 2;
  while (currNum < 4000000) {
    //current number is the sum of previous 2
    currNum = prev1 + prev2;

    //if current num is even then add to output
    if (currNum % 2 === 0) {
      output += currNum;
    }

    //update prev1 and prev2
    prev1 = prev2;
    prev2 = currNum;
  }

  return output;
};

console.log(solve(input));
