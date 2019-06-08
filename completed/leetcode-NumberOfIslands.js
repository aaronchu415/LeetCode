// _NAME: Number of Islands
// _LINK: https://leetcode.com/problems/number-of-islands/
// _CATEGORY: Array

// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {

        dfs(grid, i, j)
        count++;

      }

    }
  }

  function dfs(grid, x, y) {

    // console.log(x,y)
    // console.log(grid)

    //return if out of bounds;
    // if(x < 0 || x > grid.length) return
    // if(y < 0 || y > grid[x].length) return

    //return if zero:
    if (grid[x][y] === "0") return

    //get number
    let n = grid[x][y]

    //if 1 then add to count
    if (n === "1") {
      grid[x][y] = "0"
    }

    //go up if not out of bounds
    if (x - 1 >= 0 && x - 1 < grid.length)
      if (y >= 0 && y < grid[x - 1].length)
        dfs(grid, x - 1, y)

    //go down
    if (x + 1 >= 0 && x + 1 < grid.length)
      if (y >= 0 && y < grid[x + 1].length)
        dfs(grid, x + 1, y)

    //go left
    if (x >= 0 && x < grid.length)
      if (y - 1 >= 0 && y - 1 < grid[x].length)
        dfs(grid, x, y - 1)

    //go right
    if (x >= 0 && x < grid.length)
      if (y + 1 >= 0 && y + 1 < grid[x].length)
        dfs(grid, x, y + 1)

  }


  return count;
};
