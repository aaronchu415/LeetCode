// _NAME: Word Search
// _LINK: https://leetcode.com/problems/word-search/
// _CATEGORY: Array

// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

  let output = false;
  let seen = new Set()

  let memo = {}

  function isOTB(i, j) {
    if (i < 0 || i >= board.length) return true
    if (j < 0 || j >= board[i].length) return true
    return false
  }

  function dfs(idx, i, j) {

    //base case
    if (idx === word.length) return true

    let coord = `${i}-${j}`

    //if out of bounds return
    if (isOTB(i, j)) return false

    //if letter does not match then return
    if (board[i][j] !== word[idx]) return false

    //if visted return
    if (seen.has(coord)) return false

    //check if current call is in memo
    if (memo[`${i}-${j}-${idx}`]) return memo[`${i}-${j}-${idx}`]

    //add to seen and explore
    seen.add(coord)

    //up
    let up = dfs(idx + 1, i - 1, j)
    //down
    let down = dfs(idx + 1, i + 1, j)
    //left
    let left = dfs(idx + 1, i, j - 1)
    //right
    let right = dfs(idx + 1, i, j + 1)

    memo[`${i - 1}-${j}-${idx + 1}`] = up
    memo[`${i + 1}-${j}-${idx + 1}`] = down
    memo[`${i}-${j - 1}-${idx + 1}`] = left
    memo[`${i}-${j + 1}-${idx + 1}`] = right

    seen.delete(coord)

    return up || down || left || right
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(0, i, j)) return true
      }
    }
  }

  return false


};
