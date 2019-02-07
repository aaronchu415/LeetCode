// _NAME: Find All Anagrams in a String
// _LINK: https://leetcode.com/problems/find-all-anagrams-in-a-string/
// _CATEGORY: String

/**

Given a string s and a non-empty string p, find all the start indices of 
p's anagrams in s.

Strings consists of lowercase English letters only and the length of both 
strings s and p will not be larger than 20,100.

The order of output does not matter.

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".


Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

let input = "cbabc";
let input2 = "abc";

var findAnagrams = function(s, p) {
  let output = [];

  if (s.length === p.length && isAnagram(s, p)) return [0];
  if (s.length < p.length) return [];

  let searchMap = [...p].reduce((acc, c) => {
    if (acc[c]) acc[c]++;
    else acc[c] = 1;
    return acc;
  }, {});

  let copySearchMap = { ...searchMap };
  let counter = Object.keys(copySearchMap).length;

  for (let i = 0; i < s.length; i++) {
    let currC = s[i];

    console.log(i, s[i], copySearchMap, counter);

    if (currC in copySearchMap) {
      copySearchMap[currC]--;
      console.log("--", i, s[i], copySearchMap, counter);

      if (copySearchMap[currC] === 0) counter--;
      if (copySearchMap[currC] < 0) {
        let begIndex = i - (p.length - 1);
        //console.log(begIndex, s[begIndex], i, s[i], copySearchMap, counter);

        copySearchMap[s[begIndex]]++;
        counter++;
      }
      if (counter === 0) {
        let begIndex = i - (p.length - 1);
        //console.log(begIndex, s[begIndex], i, s[i], copySearchMap, counter);
        output.push(begIndex);

        copySearchMap[s[begIndex]]++;
        counter++;
      }
    }
  }
  return output;
};

let isAnagram = function(s1, s2) {
  if (s1.length != s2.length) return false;

  let map1 = [...s1].reduce((acc, c) => {
    if (acc[c]) acc[c]++;
    else acc[c] = 1;
    return acc;
  }, {});

  let map2 = [...s2].reduce((acc, c) => {
    if (acc[c]) acc[c]++;
    else acc[c] = 1;
    return acc;
  }, {});

  let output = true;
  Object.keys(map1).forEach(k => {
    if (map1[k] != map2[k]) output = false;
  });

  //console.log(map1, map2);

  return output;
};

//console.log(isAnagram("abcabbaab", "cbabbabaa"));

console.log(findAnagrams(input, input2));
