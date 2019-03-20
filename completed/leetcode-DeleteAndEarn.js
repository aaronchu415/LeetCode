// _NAME: Delete and Earn
// _LINK: https://leetcode.com/problems/delete-and-earn/
// _CATEGORY: Array-Integer

/**
Given an array nums of integers, you can perform operations on the array.

In each operation, you pick any nums[i] and delete it to earn nums[i] points. After, you must delete every element equal to nums[i] - 1 or nums[i] + 1.

You start with 0 points. Return the maximum number of points you can earn by applying such operations.

Input: nums = [3, 4, 2]
Output: 6
Explanation: 
Delete 4 to earn 4 points, consequently 3 is also deleted.
Then, delete 2 to earn 2 points. 6 total points are earned.

/**
 * @param {number[]} nums
 * @return {number}
 */

let input = [3, 4, 2]

var deleteAndEarn = function (nums) {

  let memo = {}
  return helper(memo, 0, nums)


};

var helper = function (memo, points, nums) {

  // console.log(memo,points,nums)

  if (nums.length === 0) {
    return points
  }

  if (nums.length === 1) {
    return points + nums[0]
  }

  let max = 0

  for (let i = 0; i < nums.length; i++) {


    let count = 0
    let modNums = nums.filter(n => {
      if (n === nums[i]) {
        count++
        return false
      }
      return true
    })
    let filteredNums = modNums.filter(n => {
      if (n === nums[i] + 1 || n === nums[i] - 1) return false
      return true
    })

    let currPoints = points + (nums[i] * count)

    let answer
    if (memo[[currPoints, filteredNums]]) {
      answer = memo[[currPoints, filteredNums]]
    } else {
      answer = helper(memo, currPoints, filteredNums)
      memo[[currPoints, filteredNums]] = answer
    }

    if (answer > max) {
      max = answer
    }

  }

  return max
}

console.log(deleteAndEarn(input));
