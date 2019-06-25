// _NAME: N-Repeated Element in Size 2N Array
// _LINK: https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
// _CATEGORY: Array

/**
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  let freqC = A.reduce((acc, v) => {
    if (acc[v]) acc[v]++
    else acc[v] = 1
    return acc
  }, {})

  for (let key of Object.keys(freqC)) {
    if (freqC[key] !== 1) return key

  }

};
