// _NAME: Longest Common Prefix
// _LINK: https://leetcode.com/problems/longest-common-prefix/
// _CATEGORY: Array-String

/**
Write a function to find the longest common prefix 
string amongst an array of strings.

If there is no common prefix, return an empty string "".

Input: ["flower","flow","flight"]
Output: "fl"

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let input = ["aca", "cba"];

var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  let output = "";

  //find the length of the smallest word. that is all the letters we need to check
  let minLength = strs[0].length;

  //for each word in string, if the length is smaller than replace minLength with the len
  strs.forEach(w => {
    let len = w.length;
    if (len < minLength) minLength = len;
  });

  //
  let b = true;

  //loop through each letter of the smallest word
  for (let i = 0; i < minLength; i++) {
    //console.log(isLetterInIndexAllTheSame(strs, i), i);

    //if the letter is in all the words and all the previous letters were also there than
    //concat the letter
    if (isLetterInIndexAllTheSame(strs, i) && b) {
      output = output.concat(strs[0][i]);
    } else {
      //else set b to false so we wont concat anymore letters after this point
      b = false;
      break;
    }
  }

  return output;
};

var isLetterInIndexAllTheSame = function(strs, currIndex) {
  let output = true;

  //loop through each word
  for (let i = 1; i < strs.length; i++) {
    let currString = strs[i];
    let prevString = strs[i - 1];

    //if all the letters are the same at the specififed index
    //than do nothing
    //else set output to false
    let currLetter = currString[currIndex];
    let prevLetter = prevString[currIndex];

    if (currLetter != prevLetter) {
      output = false;
    }
  }

  return output;
};

console.log(longestCommonPrefix(input));
//console.log(isLetterInIndexAllTheSame(input, 2));
