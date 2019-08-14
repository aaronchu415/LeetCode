// _NAME: 4Sum II
// _LINK: https://leetcode.com/problems/4sum-ii/
// _CATEGORY: Array

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {

  function createSumArr(arr1, arr2) {

    let o = []

    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        o.push(arr1[i] + arr2[j])
      }
    }

    return o
  }

  function twoSum(nums1, nums2) {

    let seen2 = nums2.reduce((acc, v) => {
      if (acc[v]) acc[v]++
      else acc[v] = 1
      return acc
    }, {})

    let seen1 = nums1.reduce((acc, v) => {
      if (acc[v]) acc[v]++
      else acc[v] = 1
      return acc
    }, {})

    let c = 0;

    for (let key of Object.keys(seen1)) {
      let target = -key
      if (seen2[target] !== undefined) {
        c += seen1[key] * seen2[target]
      }
    }

    return c

  }

  let sums1 = createSumArr(A, B)
  let sums2 = createSumArr(C, D)

  return twoSum(sums1, sums2)



};
