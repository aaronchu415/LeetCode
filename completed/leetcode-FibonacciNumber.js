// _NAME: Fibonacci Number
// _LINK: https://leetcode.com/problems/fibonacci-number/
// _CATEGORY: Integer

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  let memo = []

  for (let i = 0; i <= N; i++) {
    if (i === 0) memo.push(0)
    else if (i === 1) memo.push(1)
    else memo.push(memo[i - 1] + memo[i - 2])
  }

  return memo[N]
};
