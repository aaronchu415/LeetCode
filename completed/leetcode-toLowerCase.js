// _NAME: Impelement Lower Case Function
// _LINK: https://leetcode.com/problems/to-lower-case/
// _CATEGORY: Character-Manipulation

let input = "Hello";

/**
 Implement function ToLowerCase() that has a string parameter str,
 and returns the same string in lowercase.

 Example 1:
 Input: "Hello"
 Output: "hello

 Example 2:
 Input: "here"
 Output: "here"

 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let s = "";

  //For each letter in string
  [...str].forEach(c => {
    //find the character code
    let code = c.charCodeAt(0);

    //if code is a Capitalized letter
    if (code > 64 && code < 91) {
      //turn it to lower case by adding 32 to it
      s += String.fromCharCode(code + 32);
    } else {
      //else just append the character
      s += c;
    }
  });

  return s;
};

console.log(toLowerCase(input));
