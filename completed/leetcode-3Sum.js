// _NAME: 3Sum
// _LINK: https://leetcode.com/problems/3sum/
// _CATEGORY: Array

/**
 Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {

  let sorted = nums.sort((a, b) => a - b)

  let output = []
  let seen = {}

  for (let i = 0; i < sorted.length - 1; i++) {
    let target = 0 - sorted[i]

    if (sorted[i] === 0 && target === 0 && seen[[0, 0, 0]]) continue
    if (sorted[i - 1] === sorted[i]) continue

    //run pointer
    let j = i + 1;
    let k = sorted.length - 1

    while (j < k) {

      if ((sorted[j] + sorted[k]) === target) {
        let arr = [sorted[j], sorted[k], sorted[i]].sort((a, b) => a - b)
        if (!seen[arr]) {
          output.push(arr)
          seen[arr] = true
        }
        j++
        k--
      } else if ((sorted[j] + sorted[k]) < target) {
        j++
      } else {
        k--
      }
    }
  }

  return output

};
