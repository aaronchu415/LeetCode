// _NAME: Valid Sudoku
// _LINK: https://leetcode.com/problems/valid-sudoku/
// _CATEGORY: Array

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

  function _rowValid(row) {
    let seen = new Set()
    for (let n of row) {
      if (n === '.') continue
      if (seen.has(n)) return false
      seen.add(n)
    }
    return true
  }

  //valid row
  for (let row of board) {
    if (!_rowValid(row)) return false
  }

  //valid col
  for (let c = 0; c < board[0].length; c++) {
    let row = []
    for (let r = 0; r < board.length; r++) {
      row.push(board[r][c])
    }
    if (!_rowValid(row)) return false
  }

  for (let row_multi = 0; row_multi <= 2; row_multi++) {
    for (let col_multi = 0; col_multi <= 2; col_multi++) {
      let row = []
      for (let r = row_multi * 3; r < (row_multi * 3) + 3; r++) {
        for (let c = col_multi * 3; c < (col_multi * 3) + 3; c++) {
          row.push(board[r][c])
        }
      }

      if (!_rowValid(row)) return false
    }
  }

  return true




};
