// _NAME: Subarray Sum Equals K
// _LINK: https://leetcode.com/problems/subarray-sum-equals-k/
// _CATEGORY: Array

/**
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

  function createPrefixSum(arr) {
    let output = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
      output[i] = output[i - 1] + arr[i]

    }
    return output

  }

  function twoSum(nums, target) {

    let c = 0;
    let seen = {}

    for (let i = 0; i < nums.length; i++) {
      let diff = nums[i] - target
      if (seen[diff] !== undefined) {
        c += seen[diff]
      }
      if (seen[nums[i]]) seen[nums[i]]++
      else {
        seen[nums[i]] = 1
      }
    }

    return c

  }

  let prefixSums = createPrefixSum(nums)
  prefixSums.unshift(0)

  return twoSum(prefixSums, k)

};
