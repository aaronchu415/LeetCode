// _NAME: Unique Paths
// _LINK: https://leetcode.com/problems/unique-paths/
// _CATEGORY: Array-Integer

/**

A robot is located at the top-left corner of a m x n grid 
(marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. 
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways 
to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

let m = 3;
let n = 2;

var uniquePaths = function(m, n) {
  let memo = {};

  return helper(memo, 1, 1, m, n);
};

var helper = function(memo, x, y, m, n) {
  if (x === m && y === n) return 1;
  if (x > m) return 0;
  if (y > n) return 0;

  //console.log(memo,x,y)

  if (memo[[m, n]]) {
    return memo[[m, n]];
  } else {
    let answer = helper(memo, x, y, m - 1, n) + helper(memo, x, y, m, n - 1);
    memo[[m, n]] = answer;
    return answer;
  }
};

console.log(uniquePaths(m, n));
