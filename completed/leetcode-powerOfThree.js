// _NAME: Power of Three
// _LINK: https://leetcode.com/problems/power-of-three/
// _CATEGORY: Array-Integer

/**
Given an integer, write a function to determine if it is a power of three.

Input: 27
Output: true


/**
 * @param {number} n
 * @return {boolean}
 */

let input = 27

var isPowerOfThree = function (n) {
  if (n === 1) return true
  if (n === 2) return false
  if (n === 3) return true
  let num = 3
  while (num < n) {
    num = num * 3
    if (num === n) return true
  }

  return false
};

console.log(isPowerOfThree(input))
