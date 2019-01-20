// _NAME: Contains Duplicate II
// _LINK: https://leetcode.com/problems/contains-duplicate-ii/
// _CATEGORY: Array-Integer

/**
Given an array of integers and an integer k, find out whether 
there are two distinct indices i and j in the array such 
that nums[i] = nums[j]
and the absolute difference between i and j is at most k.

Input: nums = [1,2,3,1], k = 3
Output: true

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

let input = [1, 0, 1, 1];
let k = 1;

var containsNearbyDuplicate = function(nums, k) {
  let map = {};

  //loop throguh each num and process into map
  //map will contain the key number
  //and how many times it was seen as well as the index it was seen
  nums.forEach((n, i) => {
    if (!map[n]) {
      map[n] = { count: 1, index: [i] };
    } else {
      map[n].count++;
      map[n].index.push(i);
    }
  });

  //console.log(map);

  let output = false;

  //if the count is greater than 1
  //then find the min distance between the indexes
  //if the min distance is less than or equal to k
  //set output to true
  nums.forEach(n => {
    if (map[n].count > 1) {
      let dist = findMinDist(map[n].index);

      if (dist <= k) {
        output = true;
      }
    }
  });

  return output;
};

var findMinDist = arr => {
  let curr = arr[1];
  let prev = arr[0];
  let totalMin = curr - prev;

  for (let i = 2; i < arr.length; i++) {
    let curr = arr[i];
    let prev = arr[i - 1];

    //if curr min is less than total min than update total min
    if (curr - prev < totalMin) {
      totalMin = curr - prev;
    }
  }

  return totalMin;
};

console.log(containsNearbyDuplicate(input, k));
