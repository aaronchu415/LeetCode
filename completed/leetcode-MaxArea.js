// _NAME: Max Area of Island
// _LINK: https://leetcode.com/problems/max-area-of-island/
// _CATEGORY: Array-Integer

/**
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]

 Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.



/**
 * @param {number[][]} grid
 * @return {number}
 */

let input = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]


var maxAreaOfIsland = function (grid) {

  let maxArea = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let area = helper(i, j, grid)
      if (area > maxArea) {
        maxArea = area
      }
    }
  }

  return maxArea

};

var helper = function (x, y, grid) {


  if (x < 0 || x >= grid.length) {
    return 0
  }

  if (y < 0 || y >= grid[0].length) {
    return 0
  }

  if (grid[x][y] === 0) {
    return 0
  }

  //grid is 1. sink grid
  let area = 0;
  grid[x][y] = 0
  area++

  //go up
  area += helper(x - 1, y, grid)

  //go down
  area += helper(x + 1, y, grid)

  //go left
  area += helper(x, y - 1, grid)

  //go right
  area += helper(x, y + 1, grid)

  return area
}

console.log(maxAreaOfIsland(input));
