// _NAME: First Unique Character in a String
// _LINK: https://leetcode.com/problems/first-unique-character-in-a-string/
// _CATEGORY: String

/**
 
 Solution:
 Runtime - O(N)
 Space - O(N)

Given a string, find the first non-repeating character in it and return it's index. 
If it doesn't exist, return -1.

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

/**
 * @param {string} s
 * @return {number}
 */

let input = "dddccdbba";

var firstUniqChar = function(s) {
  let map = {};

  let cArr = s.split("");

  //loop one
  cArr.forEach((c, i) => {
    if (!map[c]) {
      map[c] = { count: 1, firstIndex: i };
    } else {
      map[c].count++;
    }
  });

  //console.log(map);

  let output = -1;

  //loop two
  Object.keys(map).forEach(k => {
    if (map[k].count === 1 && output === -1) {
      output = map[k].firstIndex;
    }
  });

  return output;
};

console.log(firstUniqChar(input));
