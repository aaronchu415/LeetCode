// _NAME: Trapping Rain Water
// _LINK: https://leetcode.com/problems/trapping-rain-water/
// _CATEGORY: Array

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

  //answer = 0
  //max_left = 1
  //max_right = 3

  // 0   1   0   2   1   0   1   3   2   1   2   1

  function findLeft(end) {

    let output = 0

    for (let i = 0; i <= end; i++) {
      output = Math.max(height[i], output)
    }

    return output

  }

  function findRight(start) {

    let output = 0

    for (let i = start; i < height.length; i++) {
      output = Math.max(height[i], output)
    }

    return output

  }

  let total = 0

  for (let i = 0; i < height.length; i++) {

    let max_left = findLeft(i)
    let max_right = findRight(i)

    let water = Math.min(max_left, max_right) - height[i]
    total += water
  }

  return total

};
