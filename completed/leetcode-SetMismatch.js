// _NAME: Set Mismatch
// _LINK: https://leetcode.com/problems/set-mismatch/
// _CATEGORY: Array

/**
The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {

  let freqC = nums.reduce((acc, v) => {
    if (acc[v]) acc[v]++
    else acc[v] = 1
    return acc
  }, {})

  let output = []

  for (let i = 1; i <= nums.length; i++) {
    if (freqC[i] === undefined) output[1] = i
    else {
      if (freqC[i] === 2) output[0] = i
    }
  }

  return output
};
