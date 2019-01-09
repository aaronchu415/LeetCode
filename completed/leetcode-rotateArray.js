// _NAME: Rotate Array
// _LINK: https://leetcode.com/problems/rotate-array/
// _CATEGORY: Array-Integer

/**
Given an array, rotate the array to the right by k steps, where k is non-negative.

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

function rotate(nums, k) {
  //if will make sure we dont do more loops than necessary
  k = k % nums.length;

  //for each number in K, we want to pop the last number and append to the front
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
}

rotate(nums, k);
console.log(nums);
