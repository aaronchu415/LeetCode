// _NAME: Contains Duplicate
// _LINK: https://leetcode.com/problems/contains-duplicate/
// _CATEGORY: Array-Integer

/**
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, 
and it should return false if every element is distinct.

Input: [1,2,3,1]
Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */

let input = [1, 2, 3, 1];

var containsDuplicate = function(nums) {
  let map = {};

  nums.forEach(n => {
    if (!map[n]) {
      map[n] = 1;
    } else {
      map[n]++;
    }
  });

  let output = false;

  nums.forEach(n => {
    if (map[n] > 1) {
      output = true;
    }
  });

  return output;
};

console.log(containsDuplicate(input));
