// _NAME: Enumerate all primes to N (5.9)
// _LINK: https://elementsofprogramminginterviews.com/
// _CATEGORY: EPI

//Brute-Force

function isPrime(num) {

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function enumerate(n) {
  let output = []

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) output.push(i);
  }

  return output;

}

console.log(enumerate(18));
