// _NAME: Longest Substring with At Least K Rep Char
// _LINK: https://leetcode.com/problems/maximum-subarray/
// _CATEGORY: String

/**
 
 Solution:
 Runtime - O(N^2) -> double forloop + helper function loop
 Space - O(1) 

Find the length of the longest substring T of a given string 
(consists of lowercase letters only) such that every character in T appears no less than k times.

Input:
s = "aaabb", k = 3

Output:
3

The longest substring is "aaa", as 'a' is repeated 3 times.


Input:
s = "ababbc", k = 2

Output:
5

The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

let s = "aacbbbdc";
let k = 2;

var longestSubstring = function(s, k) {
  //if empty string then return 0
  if (s.length === 0) return 0;

  //if entire string contains k repeating char then return length of string
  if (isSubstringValid(s, k)) return s.length;

  let currLargest = 0;

  //loop through all connected permutations of the string
  //that have length greater than "k" or greater than length of the biggest string
  for (let i = 0; i < s.length; i++) {
    let index = i + Math.max(k, currLargest) - 1;

    for (let j = index; j < s.length; j++) {
      //substring will be i to j (add one to include)
      let currSubString = s.substring(i, j + 1);
      //boolean
      let b;
      //console.log(i, j, currSubString, currSubString.length);

      //if current string length is less than k than ignore that substring
      if (currSubString.length < k) {
        b = false;
      } else {
        //else test if it is a valid substring
        b = isSubstringValid(currSubString, k);
      }

      //if valid substring then find length of substring. if len is greater than currLargest. Updates
      if (b) {
        let len = currSubString.length;
        if (len > currLargest) currLargest = len;
        //map[currSubString] = currSubString.length;
        //console.log(i, j, currSubString, currSubString.length);
      }
    }
  }

  // let currLargestValue = 0;
  // let output = "";

  // Object.keys(map).forEach(key => {
  //   let v = map[key];
  //   if (v > currLargestValue) {
  //     output = key;
  //     currLargestValue = v;
  //   }
  // });

  return currLargest;
};

var isSubstringValid = (substring, k) => {
  let map = {};

  //count how many distinct letters are in the substring
  for (let i = 0; i < substring.length; i++) {
    let currC = substring[i];
    if (!map[currC]) {
      map[currC] = 1;
    } else {
      map[currC]++;
    }
  }

  let output = true;

  //loop through each letter, if letter count is less than k, then output will be false
  let keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (map[key] < k) {
      output = false;
      return;
    }
  }

  return output;

  //console.log(output, map);
};

console.log(longestSubstring(s, k));
//console.log(isSubstringValid("aaabb", 3));
