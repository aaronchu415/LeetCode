// _NAME: 3Sum
// _LINK: https://leetcode.com/problems/self-dividing-numbers/
// _CATEGORY: Num

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let output = []

  for (let i = left; i <= right; i++) {
    let digits = i.toString().split('')
    let all = true
    for (let j = 0; j < digits.length; j++) {
      if (i % Number(digits[j]) !== 0) all = false
    }
    if (all) output.push(i)
  }
  return output
};
