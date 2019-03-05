// _NAME: Available Captures for Rook
// _LINK: https://leetcode.com/problems/available-captures-for-rook/
// _CATEGORY: Array-Integer

/**
On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

Return the number of pawns the rook can capture in one move.

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5),
             profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6),
             profit = 6-3 = 3.



Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: 
In this example the rook is able to capture all the pawns.

/**
 * @param {character[][]} board
 * @return {number}
 */

let input = [[".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", "R", ".", ".", ".", "p"], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."]]


var numRookCaptures = function (board) {
  let row = 0;
  let col = 0;

  let count = 0;

  //find position of rook
  for (let i = 0; i < board.length; i++) {
    if (board[i].indexOf('R') !== -1) {
      row = i
      col = board[i].indexOf('R')
    }
  }

  //check left

  for (let j = col - 1; j >= 0; j--) {
    // console.log(board[row][j])
    if (board[row][j] === 'B') break
    if (board[row][j] === 'p') {
      count++
      break
    }
  }

  //check right

  for (let j = col + 1; j < board[row].length; j++) {
    // console.log(board[row][j])
    if (board[row][j] === 'B') break
    if (board[row][j] === 'p') {
      count++
      break
    }
  }

  //check up

  for (let k = row - 1; k >= 0; k--) {
    // console.log(board[k][col])
    if (board[k][col] === 'B') break
    if (board[k][col] === 'p') {
      count++
      break
    }

  }

  //check down
  for (let k = row + 1; k < board.length; k++) {
    // console.log(board[k][col])
    if (board[k][col] === 'B') break
    if (board[k][col] === 'p') {
      count++
      break
    }

  }

  console.log(board)
  console.log(row, col)

  return count
};

console.log(maxProfit(numRookCaptures));
