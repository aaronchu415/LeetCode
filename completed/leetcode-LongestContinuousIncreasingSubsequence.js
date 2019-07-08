// _NAME: Longest Continuous Increasing Subsequence
// _LINK: https://leetcode.com/problems/longest-continuous-increasing-subsequence/
// _CATEGORY: Array

// Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {

  let currCount = 0
  let max = 0

  for (let i = 0; i < nums.length; i++) {

    if (i === 0) {
      max = 1
      currCount = 1
      continue
    }

    let curr = nums[i]
    let prev = nums[i - 1]

    //if increasing
    if (curr > prev) currCount++
    //not increasing (decreasing or same)
    else {
      max = Math.max(max, currCount)
      //reset
      currCount = 1;
    }
  }

  return Math.max(currCount, max)
};
