// _NAME: Squares of a Sorted Array
// _LINK: https://leetcode.com/problems/squares-of-a-sorted-array/
// _CATEGORY: Array

/**

Given an array of integers A sorted in non-decreasing order, 
return an array of the squares of each number, also in sorted non-decreasing 
order.

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
/**
 * @param {number[]} A
 * @return {number[]}
 */

let input = [-4,-1,0,3,10]
var sortedSquares = function(A) {
    
  return A.map(n => n*n).sort((a,b)=>{return a-b})
  
};

console.log(sortedSquares(input));
