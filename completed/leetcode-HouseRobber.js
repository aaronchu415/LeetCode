// _NAME: House Robber
// _LINK: https://leetcode.com/problems/house-robber/
// _CATEGORY: Array

/**
 You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])

  let memo = [nums[0], Math.max(nums[0], nums[1])]

  let prevPrev = nums[0]
  let prev = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; i++) {

    let prevC = prev
    let prevPrevC = prevPrev

    prevPrev = prev
    let curr = nums[i]
    prev = Math.max(prevC, prevPrevC + curr)

  }
  // console.log(prev,prevPrev)
  return prev
};
