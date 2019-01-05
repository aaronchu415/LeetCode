// _NAME: Top K Frequent Elements
// _LINK: https://leetcode.com/problems/top-k-frequent-elements/
// _CATEGORY: Array-Integer

/**
 Solution:
 Runtime - O(N)
 Space - O(N)

Given a non-empty array of integers, return the k most frequent elements.

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Input: nums = [1], k = 1
Output: [1]


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

let nums = [1, 1, 1, 2, 2, 3];
let k = 2;

var topKFrequent = function(nums, k) {
  let obj = {};

  nums.forEach(n => {
    if (obj[n] === undefined) {
      obj[n] = 1;
    } else {
      obj[n]++;
    }
  });
  //console.log(obj);

  let elements = Object.keys(obj)
    .sort((a, b) => obj[b] - obj[a])
    .slice(0, k)
    .map(s => Number(s));

  return elements;
};

console.log(topKFrequent(nums, k));
