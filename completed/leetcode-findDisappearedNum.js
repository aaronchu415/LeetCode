/**
 Link: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

 Solution:
 Runtime - O(N)
 Space - O(N)

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array),
some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime?
You may assume the returned list does not count as extra space.


 * @param {number[]} nums
 * @return {number[]}
 */

let input = [
    4,
    3,
    2,
    7,
    8,
    2,
    3,
    1
];

var findDisappearedNumbers = function (nums) {

    let missing = []
    let map = {}

    //for each number, add unique to map
    nums.forEach((n, i) => {
        if (map[n] === undefined) {
            map[n] = "F";
        }
    })

    //for each num from i to N
    for (let i = 1; i <= nums.length; i++) {
        //if num is not in map, it is a missing num
        if (map[i] === undefined) {
            missing.push(i);
        }
    }

    return missing;

};

console.log(findDisappearedNumbers(input));