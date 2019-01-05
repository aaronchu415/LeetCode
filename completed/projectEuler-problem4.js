// _NAME: Largest palindrome product
// _LINK: https://projecteuler.net/problem=4
// _CATEGORY: Integer

/**

A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var solve = function() {
  let base = 100;

  let output = 0;

  for (let i = 999; i >= base; i--) {
    for (let j = 999; j >= base; j--) {
      let n = i * j;
      if (isPaladrome(i * j) && n > output) {
        output = n;
        console.log(i, j, n);
      }
    }
  }

  return output;
};

var isPaladrome = function(n) {
  let s = n.toString();
  let b = true;
  let j = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] != s[j]) {
      b = false;
      //console.log(s[i], s[j]);
    }
    j--;
  }

  return b;
};

console.log(solve());
