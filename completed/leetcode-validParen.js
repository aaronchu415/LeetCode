// _NAME: Valid Parentheses
// _LINK: https://leetcode.com/problems/valid-parentheses/
// _CATEGORY: Parentheses

/**

Given a string containing just the characters '(', ')', 
'{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Input: "()"
Output: true

Input: "()[]{}"
Output: true

Input: "(]"
Output: false

Input: "([)]"
Output: false

Input: "{[]}"
Output: true

/**
 * @param {string} s
 * @return {boolean}
 */

let input = "{[[()]]}";
var isValid = function(p) {
  let stack = [];

  if (p.length === 0) return true;
  if (p.length === 1) return false;

  //for each paren
  for (let i = 0; i < p.length; i++) {
    let paren = p[i];

    //if open paren, push to stack
    if (paren === "(" || paren === "[" || paren === "{") {
      stack.push(paren);
    }

    //if closing paren, the next item on stack should be
    //its closing paren, if not we hace a problem
    if (paren === ")") {
      if (stack[stack.length - 1] !== "(") {
        return false;
      } else {
        //if it is its paren, then pop it
        stack.pop();
      }
    }

    if (paren === "}") {
      if (stack[stack.length - 1] !== "{") {
        return false;
      } else {
        stack.pop();
      }
    }

    if (paren === "]") {
      if (stack[stack.length - 1] !== "[") {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  //at the end, all the parens should be paired off
  //if any paren left over then we have a problem
  if (stack.length === 0) return true;
  return false;
};

console.log(isValid(input));
