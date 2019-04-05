// _NAME: Find the Duplicate Number
// _LINK: https://leetcode.com/problems/find-the-duplicate-number/
// _CATEGORY: Array-Integer

/**
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), 
prove that at least one duplicate number must exist. 
Assume that there is only one duplicate number, find the duplicate one.

Input: [1,3,4,2,2]
Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {


  if (nums.length === 2) return nums[0]

  let fast = 0
  let slow = 0

  while (true) {

    //if they are the same value AND not same index

    if (nums[fast] === nums[slow]) {
      if (fast !== slow) return nums[fast]
      else fast++;
    }


    //else 
    fast = (fast + 2) % nums.length
    slow = (slow + 1) % nums.length

  }

};

console.log(findDuplicate(input));
