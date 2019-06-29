// _NAME: House Robber II
// _LINK: https://leetcode.com/problems/house-robber-ii/
// _CATEGORY: Array

/**
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])

  //start by robbing firsth ouse
  let memo1 = [nums[0], Math.max(nums[0], nums[1])]

  for (let i = 2; i < nums.length; i++) {

    let prevHouse = memo1[i - 1]
    let prevPrevHouse = memo1[i - 2]

    //if it is last house then we cant rob it because we robbed first house
    if (i === nums.length - 1) {
      continue
    } else {
      //either take prev house or prevPrev + curr house
      memo1[i] = Math.max(prevHouse, prevPrevHouse + nums[i])
    }

  }

  // console.log(memo1)


  //start by robbing second house instead
  let memo2 = [0, nums[1]]

  for (let i = 2; i < nums.length; i++) {

    let prevHouse = memo2[i - 1]
    let prevPrevHouse = memo2[i - 2]

    memo2[i] = Math.max(prevHouse, prevPrevHouse + nums[i])

  }

  let robFirstMax = memo1[memo1.length - 1]
  let robSecondtMax = memo2[memo2.length - 1]
  return Math.max(robFirstMax, robSecondtMax)

};
