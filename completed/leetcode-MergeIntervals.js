// _NAME: Merge Intervals
// _LINK: https://leetcode.com/problems/merge-intervals/
// _CATEGORY: Array

/**
Given a collection of intervals, merge all overlapping intervals.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

  intervals.sort((a, b) => {
    return a[0] - b[0]
  })

  // console.log(intervals)

  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i]
    let prev = intervals[i - 1]
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(curr[1], prev[1])
      intervals.splice(i, 1);
      i--
    }
  }

  return intervals
};
