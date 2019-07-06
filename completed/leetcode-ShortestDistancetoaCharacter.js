// _NAME: Shortest Distance to a Character
// _LINK: https://leetcode.com/problems/shortest-distance-to-a-character/
// _CATEGORY: Array

/**
Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
  let output = [];

  for (let i = 0; i < S.length; i++) {
    let ch = S[i];

    if (ch === C) {
      output.push(0);
    } else {
      let j = i - 1;
      let k = i + 1;
      let dist = Number.MAX_SAFE_INTEGER;
      while (j >= 0 || k < S.length) {
        if (S[j] === C && j >= 0) {
          dist = Math.min(dist, Math.abs(i - j));
        }
        if (S[k] === C && k < S.length) {
          dist = Math.min(dist, Math.abs(i - k));
        }
        j--;
        k++;
      }
      output.push(dist);
    }
  }

  return output;
};
