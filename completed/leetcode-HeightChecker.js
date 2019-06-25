// _NAME: Height Checker
// _LINK: https://leetcode.com/problems/height-checker/
// _CATEGORY: Array

/**
Students are asked to stand in non-decreasing order of heights for an annual photo.

Return the minimum number of students not standing in the right positions.  (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {

  let correct = [...heights].sort((a, b) => a - b)

  let s = 0

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== correct[i]) s++
  }

  return s

};