// _NAME: Next Permutation
// _LINK: https://leetcode.com/problems/next-permutation/
// _CATEGORY: Array-Integer

/**
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {

  for (var p = nums.length - 1; p >= 1; p--) {

    if (nums[p] > nums[p - 1]) {
      let idx = p - 1
      let val = nums[p - 1]

      for (let i = nums.length - 1; i >= p; i--) {
        if (nums[i] > val) {
          //current val with target val
          //swap
          let temp = nums[i]
          nums[i] = nums[p - 1]
          nums[p - 1] = temp;
          break
        }
      }

      //reverse the other number
      let r = p
      let l = nums.length - 1

      while (r < l) {

        //swap number
        let temp = nums[r]
        nums[r] = nums[l]
        nums[l] = temp;
        r++
        l--
      }
      break

    }

  }

  if (p === 0) {
    let r = p
    let l = nums.length - 1

    while (r < l) {

      //swap number
      let temp = nums[r]
      nums[r] = nums[l]
      nums[l] = temp;
      r++
      l--
    }
  }

  console.log(nums)
  return nums
};