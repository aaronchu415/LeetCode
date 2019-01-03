/**
 Link: https://leetcode.com/problems/move-zeroes/

 Solution:
 Runtime - O(N)
 Space - O(N)

Given an array nums, write a function to move all
0's to the end of it while maintaining the relative order of
the non-zero elements.

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]


 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 **/

let input = [0, 0, 1]

var moveZeroes = function (nums) {

    let copy = [...nums]; //make copy of array
    let indexShift = 0; //set index shift to zero

    //loop throguh each number in the orginal input
    for (let i = 0; i < copy.length; i++) {

        //if the current number is a zero
        if (copy[i] === 0) {
            //then in the main array, remove the zero
            nums.splice(i - indexShift, 1)
            //and place in the back
            nums.push(0);
            // when we remove a zero and place in the back, (this will change the index of
            // the nums array) this result will be a decrease (shift) of the index by -1. ex
            // [0,1,0] will be [1,0,0]. The next element we need to focus on is "1" "1" is
            // in index 1 of the copy array but now it is index 0 of the 2nd array thus we
            // need to track this with a variable
            indexShift++;
        }
    }

};

moveZeroes(input)

console.log(input);