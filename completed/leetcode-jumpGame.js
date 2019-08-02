// _NAME: Jump Game
// _LINK: https://leetcode.com/problems/jump-game/
// _CATEGORY: Array

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {

  if (nums.length === 1) return true

  let output = false

  let explored = new Set()

  function explore(pos) {
    if (output === true) return
    if (explored.has(pos)) return

    explored.add(pos)

    let jumps = nums[pos]

    if (pos >= nums.length) return
    if (pos === nums.length - 1) {
      output = true
      return
    }

    for (let i = 1; i <= jumps; i++) {
      explore(pos + i)
    }
  }

  explore(0)

  return output
};
