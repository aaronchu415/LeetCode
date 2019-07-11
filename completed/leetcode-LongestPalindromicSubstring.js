// _NAME: Longest Palindromic Substring
// _LINK: https://leetcode.com/problems/longest-palindromic-substring/
// _CATEGORY: String

/**
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

  if (s.length === 0) return ""

  let maxLength = 0;
  let output = ''

  function updateOutput(string) {
    let len = string.length
    if (len > maxLength) {
      output = string
      maxLength = len
    }
  }

  function expand(start, end) {

    let sub = s.substring(start, end + 1)

    //add to object
    updateOutput(sub)

    //check if substring is a middle
    if (start - 1 >= 0 && end + 1 < s.length) {
      if (s[start - 1] === s[end + 1]) {
        expand(start - 1, end + 1)
      }
    }

  }

  for (let i = 0; i < s.length; i++) {
    expand(i, i)
    if (i + 1 < s.length && s[i] === s[i + 1]) expand(i, i + 1)
  }

  return output
};
