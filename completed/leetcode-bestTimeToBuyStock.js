// _NAME: Best Time to Buy and Sell Stock
// _LINK: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// _CATEGORY: Iteration-Conditionals

/**

Say you have an array for which the ith element is the 
price of a given stock on day i.

If you were only permitted to complete at most one transaction 
(i.e., buy one and sell one share of the stock), design an algorithm to 
find the maximum profit.

Note that you cannot sell a stock before you buy one.

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), 
             profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
/**
 * @param {number[]} prices
 * @return {number}
 */

let input = [7, 6, 4, 3, 1];
var maxProfit = function(nums) {
  if (nums.length <= 1) return 0;

  //keep track of answer
  let totalMax = 0;
  //keep track of the min number we see
  let currMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    //if currnt number is less than curr min then update curr min
    if (nums[i] < currMin) {
      currMin = nums[i];

      //else try to calculate the currMax
      //if currMax is greater then what we have so far, update it
    } else {
      let currMax = nums[i] - currMin;
      if (currMax > totalMax) totalMax = currMax;
    }
  }

  return totalMax;
};

console.log(maxProfit(input));
