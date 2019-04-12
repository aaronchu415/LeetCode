// _NAME: Generate Parentheses
// _LINK: https://leetcode.com/problems/generate-parentheses/
// _CATEGORY: Array-Integer

/**

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

  let output = []
  helper(output, "(", n * 2)

  return output

};

var helper = function (output, start, n) {

  if (negParen(start)) {
    return
  }

  if (start.length === n) {
    if (validParen(start))
      output.push(start)
    return
  }

  let y = start.concat('(')
  let x = start.concat(')')

  helper(output, y, n)
  helper(output, x, n)

}

var negParen = function (paren) {

  let count = 0;

  for (let i = 0; i < paren.length; i++) {

    if (paren[i] === '(') {
      count += 1
    }
    else if (paren[i] === ')') {
      count -= 1
    }

    if (count < 0) return true
  }

  return false

}

var validParen = function (paren) {

  let count = 0;

  for (let i = 0; i < paren.length; i++) {

    if (paren[i] === '(') {
      count += 1
    }
    else if (paren[i] === ')') {
      count -= 1
    }

    if (count < 0) return false
  }

  return count === 0

}