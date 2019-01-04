// _NAME: Reverse String
// _LINK: https://leetcode.com/problems/reverse-string/
// _CATEGORY: String-Manipulation

/**
Write a function that takes a string as input and returns the string reversed.

Input: "hello"
Output: "olleh"

 /**
 * @param {string} s
 * @return {string}
 */

input = "hello";

var reverseStringIterative = function(s) {
  let charArray = s.split("");
  let output = "";
  for (let i = charArray.length - 1; i >= 0; i--) {
    output = output.concat(charArray[i]);
  }

  return output;
};

var reverseStringRecursion = function(s) {
  if (s === "") {
    return "";
  } else {
    let reverseRest = reverseStringRecursion(s.slice(1));
    let currChar = s.charAt(0);
    return reverseRest + currChar;
  }
};

console.log(reverseStringIterative(input));
console.log(reverseStringRecursion(input));
