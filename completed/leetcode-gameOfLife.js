// _NAME: Game of Life
// _LINK: https://leetcode.com/problems/game-of-life/
// _CATEGORY: Array-Integer

/**
According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {

  let newBoard = JSON.parse(JSON.stringify(board))

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      ruleOneAndThreeAndFour(x, y, board, newBoard)
    }
  }

  return board

};

var ruleOneAndThreeAndFour = function (x, y, board, newBoard) {

  let aliveNeighbors = 0

  //check up
  let up = newBoard[x - 1] === undefined ? 0 : newBoard[x - 1][y]

  //check down
  let down = newBoard[x + 1] === undefined ? 0 : newBoard[x + 1][y]
  //check left
  let left = newBoard[x][y - 1] === undefined ? 0 : newBoard[x][y - 1]
  //check right
  let right = newBoard[x][y + 1] === undefined ? 0 : newBoard[x][y + 1]

  //check topleft
  let topLeft = newBoard[x - 1] === undefined ? 0 : newBoard[x - 1][y - 1] === undefined ? 0 : newBoard[x - 1][y - 1]
  //check topright
  let topRight = newBoard[x - 1] === undefined ? 0 : newBoard[x - 1][y + 1] === undefined ? 0 : newBoard[x - 1][y + 1]

  //check bottomleft
  let botLeft = newBoard[x + 1] === undefined ? 0 : newBoard[x + 1][y - 1] === undefined ? 0 : newBoard[x + 1][y - 1]
  //check bottomright
  let botRight = newBoard[x + 1] === undefined ? 0 : newBoard[x + 1][y + 1] === undefined ? 0 : newBoard[x + 1][y + 1]

  aliveNeighbors = up + down + left + right + topLeft + topRight + botLeft + botRight

  if (aliveNeighbors < 2 || aliveNeighbors > 3) {
    board[x][y] = 0
  }

  if (aliveNeighbors === 3) {
    board[x][y] = 1
  }


}

