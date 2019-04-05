// _NAME: Climbing Stairs _LINK: https://leetcode.com/problems/climbing-stairs/
// _CATEGORY: Integer

/**

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps.
In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

/*                    Recursion Tree. Example i = 3

                    Where: F(i) = F(i-1) + F(i-2)
                    Basecase: F(0) === 1
                    Basecase: F(<0) === 0


                                              F(3) === 3
                            F(2) === 2                            F(1) === 1
                F(1) === 1          F(0) === 1          F(0) === 1          F(-1) === 0
          F(0) === 1   F(-1) === 0

*/

/**
 * @param {number} n
 * @return {number}
 */

let input = 45;
var climbStairs = function (n) {
  let memo = {};
  return helper(memo, n);
};

var helper = function (memo, i) {
  if (i === 0) 
    return 1;
  if (i < 0) 
    return 0;
  
  if (memo[i]) {
    return memo[i];
  }

  let answer = helper(memo, i - 1) + helper(memo, i - 2);
  memo[i] = answer;
  return answer;
};

console.log(climbStairs(input));
