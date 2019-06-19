// _NAME: Implement strStr()
// _LINK: https://leetcode.com/problems/implement-strstr/
// _CATEGORY: String


// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

  if (needle.length === 0) return 0;

  for (let i = 0; i < haystack.length; i++) {

    //if found first letter then search
    if (haystack[i] === needle[0]) {

      if (haystack.slice(i, i + needle.length) === needle) return i
    }
  }

  return -1
};