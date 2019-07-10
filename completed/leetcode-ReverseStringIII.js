// _NAME: Reverse Words in a String III
// _LINK: https://leetcode.com/problems/reverse-words-in-a-string-iii/
// _CATEGORY: String

/**
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {

  return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')

};
