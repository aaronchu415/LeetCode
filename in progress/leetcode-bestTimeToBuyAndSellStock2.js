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
var maxProfit = function (prices) {

    let currMax = -1;

    for (let i = 0; i < prices.length; i++) {

        let currProfit = findProfit(prices, i);
        if (currProfit > currMax) {
            currMax = currProfit;
        }
    }

    return currMax;
};

var findBestIndex = function (prices, indexPosition) {

    let indexOfMaxProfit;
    let currMaxProfit = -1;

    for (let i = indexPosition; i < prices.length; i++) {
        let curr = prices[i];
        let profit = curr - prices[indexPosition];

        if (profit > currMaxProfit) {
            indexOfMaxProfit = i;
            currMaxProfit = profit;
        }
    }

    return indexOfMaxProfit;
};

var findProfit = function (prices, indexPosition) {

    let currProfit = 0;
    let currIndex = indexPosition; // 0
    console.log("currIndex: is ", currIndex)
    let profitIndex = findBestIndex(prices, currIndex)
    console.log("profitIndex: is ", profitIndex)

    // while bestIndex is not indexPosition, we want to keep finding BestIndex and
    // the profit
    while (currIndex != profitIndex) {

        //update current profit
        currProfit += prices[profitIndex] - prices[currIndex];

        //update curr index to be profot index
        currIndex = profitIndex + 1
        console.log("currIndex: is ", currIndex)

        //update profit index
        profitIndex = findBestIndex(prices, currIndex)

    }

    return currProfit;

}

console.log(findProfit(input, 1));
//console.log(maxProfit(input));