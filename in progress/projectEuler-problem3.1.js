// _NAME: Largest prime factor
// _LINK: https://projecteuler.net/problem=3
// _CATEGORY: Integer

/**

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

let input = 600851475143;

var solve = function(n) {
  let maxPrime = -1;

  //keep cutting the number in half till it cant be divided by 2
  //this will result in n being odd
  while (n % 2 === 0) {
    maxPrime = 2;
    n = n / 2;
    //console.log("maxPrime", maxPrime, "n", n);
  }

  //we will try to divide by odd numbers
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    //if n can be divided by number then keep dividing the current num
    while (n % i === 0) {
      maxPrime = i; //max prime is going to be updated to the current num
      //console.log("maxPrime", maxPrime, "i", i, "n", n);
      n = n / i; //divided n by the current num
    }
  }

  if (n > 2) maxPrime = n;

  return maxPrime;
};

console.log(solve(input));
