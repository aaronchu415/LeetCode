// _NAME: Unique Paths II
// _LINK: https://leetcode.com/problems/unique-paths-ii/
// _CATEGORY: 2d-Array-Integer

/**

A robot is located at the top-left corner of a m x n grid 
(marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. 
The robot is trying to reach the bottom-right corner of the grid 
(marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique 
paths would there be?

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

let input = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];

let uniquePathsWithObstacles = function(grid) {
  if (grid[0][0] === 1) return 0;
  if (grid.length === 1 && grid[0].length === 1 && grid[0][0] === 1) return 0;

  let modGrid = grid.map(row => {
    let editRow = row.map(cell => {
      if (cell === 0) {
        return false;
      }
      if (cell === 1) {
        return true;
      }
    });

    return editRow;
  });

  for (let r = 0; r < modGrid.length; r++) {
    for (let c = 0; c < modGrid[r].length; c++) {
      //console.log("before", r, c, modGrid[r][c]);
      if (r === 0 && c === 0) {
        modGrid[r][c] = 1;
      } else if (modGrid[r][c] === true) {
        modGrid[r][c] = 0;
      } else if (modGrid[r][c] === false) {
        let topVal;
        let leftVal;

        if (modGrid[r - 1]) {
          topVal = modGrid[r - 1][c];
        } else {
          topVal = 0;
        }

        if (modGrid[r][c - 1]) {
          leftVal = modGrid[r][c - 1];
        } else {
          leftVal = 0;
        }
        modGrid[r][c] = topVal + leftVal;
      }
      //console.log("after", r, c, modGrid[r][c]);
    }
  }

  return modGrid[modGrid.length - 1][modGrid[0].length - 1];
};

console.log(uniquePathsWithObstacles(input));
