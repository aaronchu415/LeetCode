// _NAME: Unique Paths III
// _LINK: https://leetcode.com/problems/unique-paths-iii/
// _CATEGORY: Array-Integer

/**
On a 2-dimensional grid, there are 4 types of squares:

1 represents the starting square.  There is exactly one starting square.
2 represents the ending square.  There is exactly one ending square.
0 represents empty squares we can walk over.
-1 represents obstacles that we cannot walk over.
Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

Input: [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
Output: 2
Explanation: We have the following two paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)


**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {

  let startX
  let startY
  let endX
  let endY

  //deep copy of the board
  let visted = JSON.parse(JSON.stringify(grid));


  //find starting and ending corrdinates
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        startX = i
        startY = j
      }

      if (grid[i][j] === 2) {
        endX = i
        endY = j
      }
    }
  }

  return helper(startX, startY, endX, endY, visted)



};

var helper = function (startX, startY, endX, endY, visted) {

  //create deep copy of visted grid and mark current position as visted
  let copyVisted = JSON.parse(JSON.stringify(visted));
  copyVisted[startX][startY] = true

  //base case (if we reach the end X and Y)
  if (startX === endX && startY === endY) {

    //if every cell has been visited (except for the ending position or obsticals)
    //then this is a solution so we return 1
    if (visted.every(arr => {

      return arr.every(v => {
        if (v === true || v === -1 || v === 2) {
          return true
        } return false
      })
    })) {
      return 1
    }
    //if we reach the end but we did not visit all the nodes then this is not a sol and return 0
    return 0
  }

  let nextX
  let nextY

  let count = 0

  //move up
  nextX = startX - 1
  nextY = startY

  //if not out of bounds
  if (nextX >= 0 && nextX < visted.length) {
    if (nextY >= 0 && nextY < visted[0].length) {
      //if not visted
      if (visted[nextX][nextY] !== true) {
        //if not obstical
        if (visted[nextX][nextY] !== -1) {
          //then explore and add the number of solutions to our counter var
          count += helper(nextX, nextY, endX, endY, copyVisted)
        }
      }
    }

  }

  //move down
  nextX = startX + 1
  nextY = startY

  if (nextX >= 0 && nextX < visted.length) {
    if (nextY >= 0 && nextY < visted[0].length) {
      if (visted[nextX][nextY] !== true) {
        if (visted[nextX][nextY] !== -1) {
          count += helper(nextX, nextY, endX, endY, copyVisted)
        }
      }
    }

  }


  //move left
  nextX = startX
  nextY = startY - 1

  if (nextX >= 0 && nextX < visted.length) {
    if (nextY >= 0 && nextY < visted[0].length) {
      if (visted[nextX][nextY] !== true) {
        if (visted[nextX][nextY] !== -1) {
          count += helper(nextX, nextY, endX, endY, copyVisted)
        }
      }
    }

  }

  //move right
  nextX = startX
  nextY = startY + 1

  if (nextX >= 0 && nextX < visted.length) {
    if (nextY >= 0 && nextY < visted[0].length) {
      if (visted[nextX][nextY] !== true) {
        if (visted[nextX][nextY] !== -1) {
          count += helper(nextX, nextY, endX, endY, copyVisted)
        }
      }
    }

  }

  //return number of solutions
  return count

}

console.log(uniquePathsIII([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 2, -1]]));
