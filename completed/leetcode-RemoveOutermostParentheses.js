// _NAME: Remove Outermost Parentheses
// _LINK: https://leetcode.com/problems/remove-outermost-parentheses/
// _CATEGORY: String

// A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

// A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

// Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {

  let arr = []
  let output = ''

  for (let i = 0; i < S.length; i++) {
    let paren = S[i]

    if (i === 0) {
      arr.push(1)
      continue
    }

    if (paren === '(') arr.push(arr[i - 1] + 1)
    else if (paren === ')') arr.push(arr[i - 1] - 1)
  }

  console.log(arr)

  //dont add if item is 0 and dont add the item after 0
  //if its first item then remove too

  for (let i = 0; i < arr.length; i++) {
    //dont add first item
    if (i === 0) continue

    //dont add 0
    if (arr[i] === 0) continue;

    //dont add the item after 0
    if (arr[i - 1] === 0) continue

    output = output + S[i]
  }

  return output


};