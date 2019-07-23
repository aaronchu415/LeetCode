// _NAME: Longest Consecutive Sequence
// _LINK: https://leetcode.com/problems/longest-consecutive-sequence/
// _CATEGORY: Array

// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// Your algorithm should run in O(n) complexity.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {

  let set = new Set(nums)
  let used = new Set()

  let max_streak = 0;

  for (let n of nums) {
    let current_streak = 1;
    let curr_num = n;

    if (used.has(curr_num)) continue

    used.add(curr_num)

    //get smallest curr_num;
    while (set.has(curr_num - 1)) {
      curr_num--
      used.add(curr_num)
    }

    let next_num = curr_num + 1

    while (set.has(next_num)) {
      current_streak++;
      next_num++
      used.add(next_num)
    }

    max_streak = Math.max(max_streak, current_streak)

  }

  return max_streak

};
