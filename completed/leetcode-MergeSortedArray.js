// _NAME: Merge Sorted Array
// _LINK: https://leetcode.com/problems/merge-sorted-array/
// _CATEGORY: Array

/**
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

  let arr = []

  let i = 0
  let j = 0

  while (i < m && j < n) {

    if (nums1[i] < nums2[j]) {
      arr.push(nums1[i])
      i++
    } else if (nums1[i] > nums2[j]) {
      arr.push(nums2[j])
      j++
    } else {
      arr.push(nums1[i])
      arr.push(nums2[j])
      i++
      j++
    }
  }

  while (i < m) {
    arr.push(nums1[i])
    i++
  }

  while (j < n) {
    arr.push(nums2[j])
    j++
  }

  for (let i = 0; i < arr.length; i++) {
    nums1[i] = arr[i]
  }
  return nums1

};
