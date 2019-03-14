// _NAME: Product of Array Except Self
// _LINK: https://leetcode.com/problems/product-of-array-except-self/
// _CATEGORY: Array-Integer

/**
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i]

Input:  [1,2,3,4]
Output: [24,12,8,6]

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let countOfZero = 0
  let product = nums.reduce((acc, v) => {
    if (v === 0) countOfZero++
    acc = acc * v
    return acc
  }, 1)

  if (countOfZero === 1) {

    let productWithoutZero = nums.reduce((acc, v) => {
      if (v === 0) return acc
      acc = acc * v
      return acc
    }, 1)

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        nums[i] = productWithoutZero
      } else {
        nums[i] = 0
      }
    }
    return nums
  }

  if (countOfZero >= 2) {
    for (let i = 0; i < nums.length; i++) {
      nums[i] = 0
    }
    return nums
  }

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i]
    nums[i] = product / curr
  }


  return nums
};

console.log(productExceptSelf([1, 2, 3, 4]));
