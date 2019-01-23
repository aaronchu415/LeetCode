// _NAME: Happy Number
// _LINK: https://leetcode.com/problems/happy-number/
// _CATEGORY: Linked List

/**

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: 
Starting with any positive integer, replace the number by the 
sum of the squares of its digits, and repeat the process until the 
number equals 1 (where it will stay), or it loops endlessly in a 
cycle which does not include 1. 
Those numbers for which this process ends in 1 are happy numbers.

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */

let input = 22;

var isHappy = function(input) {
  let currInput = input;

  let memo = {};
  while (currInput != 1) {
    let sum = 0;
    [...currInput.toString()].forEach(n => {
      let square = parseInt(n) * parseInt(n);
      sum += square;
    });

    if (!memo[sum]) {
      memo[sum] = "found";
    } else {
      return false;
    }

    currInput = sum;
  }

  return true;
};

console.log(isHappy(input));
