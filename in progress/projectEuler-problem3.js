// _NAME: Largest prime factor
// _LINK: https://projecteuler.net/problem=3
// _CATEGORY: Integer

/**

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

let input = 600851475143;

var solve = function(num) {
  // for (let i = num; i > 0; i--) {
  //   if (num % i === 0 && isPrime(i)) {
  //     return i;
  //   }
  // }

  let i = 0;
  let primes = [];
  while (i < num) {
    if (isPrime(i)) {
      primes.push(i);
    }

    i++;
  }

  //return primes;
};

function isPrime(input) {
  let isPrime = true;

  if (input < 1) return false;

  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

//console.log(isPrime(600851475143));

console.log(solve(input));
