// _NAME: Maximum Subarray
// _LINK: https://leetcode.com/problems/maximum-subarray/
// _CATEGORY: Array

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

  let memo = []

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      memo.push(nums[i])
      continue
    }

    //choice between:
    //add to prev or restart
    memo[i] = Math.max(nums[i], (nums[i] + memo[i - 1]))
  }

  return Math.max(...memo)

};
