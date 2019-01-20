// _NAME: Intersection of Two Arrays II
// _LINK: https://leetcode.com/problems/intersection-of-two-arrays-ii/
// _CATEGORY: Array-Integer

/**
Given two arrays, write a function to compute their intersection.

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let nums1 = [1, 2, 1];
let nums2 = [2, 2];

var intersect = function(nums1, nums2) {
  //arr1 is larger array
  //arr2 is smaller array
  let arr1 = nums1.length >= nums2.length ? nums1 : nums2;
  let arr2 = nums1.length < nums2.length ? nums1 : nums2;

  let map = {};

  //make the largest array into a map
  arr1.forEach(n => {
    if (!map[n]) {
      map[n] = 1;
    } else {
      map[n]++;
    }
  });

  let output = [];

  //for each number in the smaller array
  //if we find same number in the larger array
  //then decrease the count by 1 and add to output

  //if count is zero or not found, then dont add to output
  for (let i = 0; i < arr2.length; i++) {
    //if count is NOT zero or exist in map
    if (map[arr2[i]]) {
      output.push(arr2[i]);
      map[arr2[i]]--;
    }
  }

  return output;
};

console.log(intersect(nums1, nums2));
