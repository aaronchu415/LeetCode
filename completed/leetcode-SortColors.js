// _NAME: Sort Colors
// _LINK: https://leetcode.com/problems/sort-colors/
// _CATEGORY: Array

/**
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

  let one = 0
  let two = 0
  let three = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) one++
    if (nums[i] === 1) two++
    if (nums[i] === 2) three++
  }

  for (let i = 0; i < one; i++) {
    nums[i] = 0
  }

  for (let i = one; i < (one + two); i++) {
    nums[i] = 1
  }

  for (let i = (one + two); i < (one + two + three); i++) {
    nums[i] = 2
  }

  return nums
};
