// _NAME: Island Perimeter
// _LINK: https://leetcode.com/problems/island-perimeter/
// _CATEGORY: Array-Integer

/**
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16

Explanation: The perimeter is the 16 yellow stripes in the image below:

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {

  let output = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let curr = grid[i][j]

      if (curr === 1) {
        //up
        let up = check(i - 1, j, grid)

        //down
        let down = check(i + 1, j, grid)

        //left
        let left = check(i, j - 1, grid)

        //right
        let right = check(i, j + 1, grid)

        output += up
        output += down
        output += left
        output += right

        // console.log(i,j,'++++',up,down,left,right)
      }


    }
  }

  return output
};

var check = function (i, j, grid) {

  //out of bounds
  if (i < 0 || i >= grid.length) {
    return 1
  }
  if (j < 0 || j >= grid[i].length) {
    return 1
  }

  //if 0 then return 1
  if (grid[i][j] === 0) {
    return 1
  }

  return 0
}