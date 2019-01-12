// _NAME: Valid Anagram
// _LINK: https://leetcode.com/problems/valid-anagram/
// _CATEGORY: String

/**
 
 Solution:
 Runtime - O(N)
 Space - O(N)

Given two strings s and t , write a function to determine if t is an anagram of s.

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

let input1 = "anagram";
let input2 = "nagaram";

var isAnagram = function(s1, s2) {
  if (s1.length === 0 && s2.length === 0) return true;
  if (s1.length !== s2.length) return false;

  let map1 = {};
  let map2 = {};
  s1.split("").forEach(c => {
    if (!map1[c]) {
      map1[c] = 1;
    } else {
      map1[c]++;
    }
  });

  s2.split("").forEach(c => {
    if (!map2[c]) {
      map2[c] = 1;
    } else {
      map2[c]++;
    }
  });

  let output = true;

  Object.keys(map1).forEach(k => {
    if (!map2[k]) {
      output = false;
    } else if (map1[k] != map2[k]) {
      output = false;
    }
  });

  return output;
};

console.log(isAnagram(input1, input2));
