// _NAME: Subsets
// _LINK: https://leetcode.com/problems/subsets/
// _CATEGORY: Array-Integers

/**

Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

  let output = []

  helper(output, [], 0, nums)

  return output

};

var helper = function (output, arr, i, nums) {

  if (i === nums.length) {
    output.push([...arr])
    return
  }

  let n = nums[i]

  //not add
  helper(output, arr, i + 1, nums)

  //add
  arr.push(n)
  helper(output, arr, i + 1, nums)
  arr.pop()
}