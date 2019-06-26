// _NAME: Valid Palindrome
// _LINK: https://leetcode.com/problems/valid-palindrome/
// _CATEGORY: String

/**

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

  s = s.toLowerCase().replace(/[\W_]+/g, " ").replace(/\s/g, '');

  let l = 0
  let r = s.length - 1

  while (l < r) {
    if (s[l] !== s[r]) return false
    l++
    r--
  }

  return true
};
