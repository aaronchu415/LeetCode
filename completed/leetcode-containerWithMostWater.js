// _NAME: Container With Most Water
// _LINK: https://leetcode.com/problems/container-with-most-water/ 
// _CATEGORY: Array-Integer

/**
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate
(i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and
(i, 0). Find two lines, which together with x-axis forms a container, such that the container
contains the most water.

Note: You may not slant the container and n is at least 2

Input: [1,8,6,2,5,4,8,3,7]
Output: 49

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

  let left = 0
  let right = height.length - 1

  let maxArea = 0

  //if they are not equal then compute area and update if bigger
  while (left !== right) {
    let lval = height[left]
    let rval = height[right]
    let width = right - left

    let area = width * Math.min(lval, rval)
    maxArea = Math.max(area, maxArea)

    if (lval < rval) {
      left++
    } else {
      right--
    }
  }

  return maxArea

};

console.log(maxArea(input));
