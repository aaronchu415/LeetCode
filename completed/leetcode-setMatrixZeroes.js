// _NAME: Set Matrix Zeroes
// _LINK: https://leetcode.com/problems/set-matrix-zeroes/
// _CATEGORY: Array-Integer

/**
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.
Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] === 0) {
        replaceRowColWithZero(x, y, matrix)
      }

    }
  }

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] === false) {
        matrix[x][y] = 0
      }

    }
  }


};

var replaceRowColWithZero = function (x, y, matrix) {

  //change row
  for (let i = 0; i < matrix[x].length; i++) {
    if (matrix[x][i] !== 0)
      matrix[x][i] = false
  }

  //change col
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][y] != - 0)
      matrix[i][y] = false
  }

}
