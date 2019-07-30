// _NAME: Edit Distance
// _LINK: https://leetcode.com/problems/edit-distance/
// _CATEGORY: Array

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {

  let memo = {}
  memo[`0-0`] = 0

  word1 = ' ' + word1
  word2 = ' ' + word2


  function explore(i, j) {

    if (i === word1.length || j === word2.length) return

    if (word1[i] !== word2[j]) {

      let d = memo[`${i - 1}-${j}`] === undefined ? Number.MAX_SAFE_INTEGER : memo[`${i - 1}-${j}`]

      let r = memo[`${i - 1}-${j - 1}`] === undefined ? Number.MAX_SAFE_INTEGER : memo[`${i - 1}-${j - 1}`]

      let insert = memo[`${i}-${j - 1}`] === undefined ? Number.MAX_SAFE_INTEGER : memo[`${i}-${j - 1}`]

      let answer = 1 + Math.min(d, r, insert)
      memo[`${i}-${j}`] = answer
    } else {
      memo[`${i}-${j}`] = memo[`${i - 1}-${j - 1}`] || 0
    }

  }

  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      explore(i, j)
    }
  }

  let lastI = word1.length - 1
  let lastJ = word2.length - 1

  return memo[`${lastI}-${lastJ}`]

};
