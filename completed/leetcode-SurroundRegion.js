// _NAME: Surrounded Regions
// _LINK: https://leetcode.com/problems/surrounded-regions/
// _CATEGORY: Array

// Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {

  let visited = {}

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let outcome = { canCapture: true }
      if (board[i][j] === 'O' && !visited[[i, j]]) {
        explore(board, i, j, visited, outcome)

        // console.log('BEFORE',board,outcome)

        if (outcome['canCapture']) {

          turnIntoX(board)

        } else {
          turnIntoO(board)
        }

        // console.log('AFTER',board,outcome)

      }
    }
  }
  return board
};

var turnIntoX = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === false) {
        board[i][j] = 'X'
      }
    }
  }
}

var turnIntoO = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === false) {
        board[i][j] = 'O'
      }
    }
  }
}

var explore = function (board, x, y, visited, outcome) {


  //if edge then set outcome to false
  if (x < 0 || x >= board.length) {
    outcome["canCapture"] = false
    return
  }
  if (y < 0 || y >= board[x].length) {
    outcome.canCapture = false
    return
  }

  //if X then ignore
  if (board[x][y] === 'X') {
    return
  }

  //set to visited and set to "O" to false
  visited[[x, y]] = true
  board[x][y] = false


  //go up
  if (visited[[x - 1, y]] === undefined) {
    explore(board, x - 1, y, visited, outcome)
  }

  //go down
  if (visited[[x + 1, y]] === undefined) {
    explore(board, x + 1, y, visited, outcome)
  }

  //go left
  if (visited[[x, y - 1]] === undefined) {
    explore(board, x, y - 1, visited, outcome)
  }

  //go right
  if (visited[[x, y + 1]] === undefined) {
    explore(board, x, y + 1, visited, outcome)
  }


}
