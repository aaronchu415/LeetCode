// _NAME: Maximum Subarray
// _LINK: https://leetcode.com/problems/maximum-subarray/
// _CATEGORY: Array-Integer

/**
Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6

/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, -14];
//let nums = [-2, -1, -3, -4, -2, 1];
//let nums = [1, 2];

function maxSubArray(nums) {
  //if array is only 1 element then return that element
  if (nums.length < 2) return nums[0];

  //we will turn the elements in the array into the changes in points on a graph
  let currPointInGraph = 0;
  let graph = [0];

  let allNeg = true; //keeps track of if the array is all negative nums
  let max = nums[0];

  //loop through num
  for (let i = 0; i < nums.length; i++) {
    //calculate the points on the graph
    currPointInGraph += nums[i];
    graph.push(currPointInGraph);

    //if number is not negative then assign allNeg to be false
    if (nums[i] > 0) {
      allNeg = false;
    }

    //get the max number in the array
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  //console.log(graph);

  //find the min value in the graph
  let minimumValue = Math.min(...graph);

  //normalize the graph by adding the min value to each graph (gets rid of negative points)
  mGraph =
    minimumValue < 0 ? graph.map(n => n + Math.abs(minimumValue)) : graph;
  //console.log(mGraph);

  //get the max change in the array (local max - local min)
  let min = mGraph[0];
  let max_diff = 0;
  for (let i = 1; i < mGraph.length; i++) {
    let e = mGraph[i];
    if (e - min > max_diff) max_diff = e - min;
    if (e < min) min = e;
  }

  //if the numbers are all slopeing down (all negative) then return max number
  if (allNeg) return max;
  //else return the max_diff we calculated above
  return max_diff;
}

console.log(maxSubArray(nums));
