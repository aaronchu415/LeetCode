// _NAME: Permutations
// _LINK: https://leetcode.com/problems/permutations/
// _CATEGORY: Array-Integer

/**

Given a collection of distinct integers, return all possible permutations.

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*                    Recursion Tree. Example [1,2,3]

                                 {arr,remaining}
                                    [],[1,2,3]
        [1],[2,3]                   [2],[1,3]                   [3],[1,2]
[1,2],[3]    [1,3],[2]       [2,1],[3]     [2,3],[2]    [3,1],[2]   [3,2],[1]
[1,2,3],[]   [1,3,2],[]      [2,1,3],[]    [2,3,2],[]   [3,1,2],[]  [3,2,1],[]


we hit base case since [].length === 0
we then push to output.

push         push           push             push        push         push
[1,2,3]      [1,3,2]       [2,1,3]          [2,3,2]     [3,1,2]     [3,2,1]


 */

let nums = [1, 2, 3];

var permute = function(nums) {
  return helper([], [], nums);
};

var helper = function(output, arr, remaining) {
  //base case. if remaining characters is empty then append arr to final output array
  if (remaining.length === 0) {
    output.push(arr);
    return;
  }

  //loop through each character in the remaining array
  for (let i = 0; i < remaining.length; i++) {
    //make copy of the arrays with previous elements
    let arrCopy = [...arr];
    //append the current element to the arr
    arrCopy.push(remaining[i]);
    //filter the current number from the remaining array
    let filtered = remaining.filter((num, ind) => {
      return ind !== i;
    });

    //recursively call with new inputs
    helper(output, arrCopy, filtered);
  }

  return output;
};

console.log(permute(nums));
