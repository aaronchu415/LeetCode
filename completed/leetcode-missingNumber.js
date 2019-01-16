// _NAME: Missing Number
// _LINK: https://leetcode.com/problems/missing-number/
// _CATEGORY: Array-Integer

/**

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
find the one that is missing from the array.

Input: [3,0,1]
Output: 2

Input: [9,6,4,2,3,5,7,0,1]
Output: 8

/**
 * @param {number[]} nums
 * @return {number}
 */

let input = [3, 0, 1];
var missingNumber = function(nums) {
  // n(n+1)/2 will give you sum of 1 to nums.length
  //thus we can just take the answer that we got minus the answer we should have to find the missing num

  return (
    (nums.length * (nums.length + 1)) / 2 -
    nums.reduce((total, n) => {
      return total + n;
    })
  );
};

console.log(missingNumber(input));
