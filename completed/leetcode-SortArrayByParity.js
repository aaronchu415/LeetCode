// _NAME: Sort Array By Parity
// _LINK: https://leetcode.com/problems/sort-array-by-parity/
// _CATEGORY: Array-Integer

/**
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.


/**
 * @param {number[]} A
 * @return {number[]}
 */

let input = [3, 1, 2, 4]

var sortArrayByParity = function (A) {
  let even = A.filter(v => {
    return v % 2 === 0
  })

  let odd = A.filter(v => {
    return v % 2 != 0
  })

  return even.concat(odd)

  // console.log(A,even,odd)
};

console.log(sortArrayByParity(input));
