// _NAME: Majority Element
// _LINK: https://leetcode.com/problems/majority-element/
// _CATEGORY: Array-Integer

/**
 
 Solution:
 Runtime - O(N)
 Space - O(N)

Given an array of size n, find the majority element. 
The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
/**
 * @param {number[]} nums
 * @return {number}
 */

let input = [3, 2, 3];

var majorityElement = function(nums) {
  let map = {};

  //loop one
  nums.forEach(n => {
    if (!map[n]) {
      map[n] = 1;
    } else {
      map[n]++;
    }
  });

  let output;
  let x = nums.length / 2;

  //loop two
  Object.keys(map).forEach(k => {
    if (map[k] > x) {
      output = k;
    }
  });

  return output;
};

console.log(majorityElement(input));
