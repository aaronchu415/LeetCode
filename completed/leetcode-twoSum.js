// _NAME: Two Sum
// _LINK: https://leetcode.com/problems/two-sum/
// _CATEGORY: Array-Integer

/**

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [2, 7, 11, 15];
let target = 9;

var twoSum = function(nums, target) {
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] + nums[k] === target) {
        output.push(i);
        output.push(k);
        break;
      }
      //console.log(nums[i], nums[k], nums[i] + nums[k]);
    }
  }

  return output;
};

console.log(twoSum(nums, target));
