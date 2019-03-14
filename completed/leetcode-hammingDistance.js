// _NAME: Hamming Distance
// _LINK: https://leetcode.com/problems/hamming-distance/
// _CATEGORY: Integer

/**
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function (x, y) {
  let binaryX = x.toString(2).padStart(y.toString(2).length, '0')
  let binaryY = y.toString(2).padStart(x.toString(2).length, '0')

  let output = 0;

  for (let i = 0; i < binaryX.length; i++) {
    if (binaryX[i] !== binaryY[i]) {
      output++
    }
  }

  return output

};

console.log(hammingDistance(1, 4));
