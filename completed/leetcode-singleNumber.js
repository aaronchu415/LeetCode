// _NAME: Single Number
// _LINK: https://leetcode.com/problems/single-number/
// _CATEGORY: Array-Integer

/**
 Solution:
 Runtime - O(2N) -> O(N)
 Space - O(N)

Given a non-empty array of integers,
every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity.
Could you implement it without using extra memory?

Input: [2,2,1]
Output: 1

Input: [4,1,2,1,2]
Output: 4

 /**
 * @param {number[]} nums
 * @return {number}
 */
let input = [4, 1, 2, 1, 2];

var singleNumber = function(nums) {
  let map = {};
  let output;

  // iterate through each number in array if number is not found in map, then map
  // to single if number is found in map, then map to dup
  nums.forEach(n => {
    if (map[n] === undefined) {
      map[n] = "single";
    } else {
      map[n] = "dup";
    }
  });

  // iterate through num array a second time if number maps to "single" then
  // output is the current number
  nums.forEach(n => {
    if (map[n] === "single") {
      output = n;
      return;
    }
  });

  return output;
};

console.log(singleNumber(input));
