// _NAME: Group Anagrams
// _LINK: https://leetcode.com/problems/group-anagrams/
// _CATEGORY: Array-String

/**
Given an array of strings, group anagrams together.

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

  // We're going to create a Map of [sorted Str : list of the anagrams]
  let sortedStrs = strs.map((string) => [...string].sort().join(''));
  let objUniq = sortedStrs.reduce((obj, key, i) => {
    (obj[key] === undefined) ? obj[key] = [strs[i]] : obj[key].push(strs[i]);
    return obj;
  }
    , {});

  return Object.values(objUniq);

}

console.log(groupAnagrams(input));
