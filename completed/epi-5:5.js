// _NAME: Delete Duplicates from a Sorted Array (5.5)
// _LINK: https://elementsofprogramminginterviews.com/
// _CATEGORY: EPI

// O(n) time and O(1) space

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

  let r = 0;
  let w = 0;
  let c = 0;

  while (r < nums.length) {
    if (r === 0) {
      r++
      w++
    } else if (nums[r] !== nums[r - 1]) {
      nums[w] = nums[r]
      w++
      r++
    } else if (nums[r] === nums[r - 1]) {
      r++
      c++
    }
  }

  nums.length = nums.length - c;
  return nums;
};

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 5, 6]))
