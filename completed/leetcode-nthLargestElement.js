// _NAME: Kth Largest Element in an Array
// _LINK: https://leetcode.com/problems/kth-largest-element-in-an-array/
// _CATEGORY: String

/**
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Input: [3,2,1,5,6,4] and k = 2
Output: 5

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

let input = [3, 2, 1, 5, 6, 4]

var findKthLargest = function (nums, k) {
  nums.sort((a, b) => {
    return a - b
  })
  console.log(nums)

  return nums[nums.length - k]
};

console.log(findKthLargest(input));
