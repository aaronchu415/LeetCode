// _NAME: Minimum Add to Make Parentheses Valid
// _LINK: https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
// _CATEGORY: String

/**
Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

Formally, a parentheses string is valid if and only if:

It is the empty string, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.
*/
/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {

  let stack = []
  let c = 0

  for (let i = 0; i < S.length; i++) {

    //if '(' then add to stack
    if (S[i] === '(') stack.push('(')
    else if (S[i] === ')') {
      let lastItem = stack[stack.length - 1]
      if (lastItem === '(') {
        stack.pop()
      } else {
        c++
      }
    }
  }

  return stack.length + c

};