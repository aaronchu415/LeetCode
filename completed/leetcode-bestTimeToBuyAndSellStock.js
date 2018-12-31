/**
 Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit.
You may complete as many transactions as you like (i.e., buy one and sell
    one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e.,
    you must sell the stock before you buy again).

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5),
             profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6),
             profit = 6-3 = 3.



Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell
             them later, as you are
             engaging multiple transactions at the same time. You must sell
             before buying again.
/**
 * @param {number[]} prices
 * @return {number}
 */

let input = [
    7,
    1,
    5,
    3,
    6,
    4
]

// if tommrows price is up then buy and sell it (and collect profit) if prices
// tommrow is down then dont buy. (Makes sense if we imagine a graph of a stock
// chart).
var maxProfit = function (prices) {

    let total = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            total += prices[i + 1] - prices[i]
        };
    }

    return total;
};

console.log(maxProfit(input));