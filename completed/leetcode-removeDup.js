// _NAME: Remove Duplicates from Sorted Array
// _LINK: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// _CATEGORY: Array-Integer

/**
 Solution:
 Runtime - O(n)
 Space - O(1)

Given a sorted array nums, remove the duplicates in-place such that 
each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by 
modifying the input array in-place with O(1) extra memory.

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.


Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.


/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function(nums) {
  //loop through array starting from position 1
  for (let i = 1; i < nums.length; i++) {
    let prev = nums[i - 1];
    let curr = nums[i];

    //if the current element is the same as the prev element (it is a dup, we need to remove)
    if (curr === prev) {
      //remove dup
      nums.splice(i, 1);
      //since we remove dup, (this will shift the array to the left, thus the next num will be in the same index)
      i--;
    }
    //console.log(nums[i]);
  }

  return nums.length;
};

console.log(removeDuplicates(nums));
console.log(nums);
