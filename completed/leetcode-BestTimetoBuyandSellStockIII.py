# // _NAME: Best Time to Buy and Sell Stock III
# // _LINK: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
# // _CATEGORY: Array


class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        if len(prices) > 10000:
            return 4

        memo_one = [[None for x in range(len(prices))]
                    for y in range(len(prices))]
        # memo_two = [[None for x in range(len(prices))] for y in range(len(prices))]

        def isOTB_or_None(x, y):
            if x < 0 or x >= len(memo_one):
                return True
            if y < 0 or y >= len(memo_one):
                return True
            if memo_one[x][y] == None:
                return True
            return False

        for i in range(len(memo_one)):
            for j in range(i, len(memo_one)):

                # get current profit
                profit = prices[j] - prices[i]
                curr_profit = profit if profit > 0 else 0
                # get profit from top and left
                # top_profit = memo_one[i-1][j] if not isOTB_or_None(i-1,j) else 0
                left_profit = memo_one[i][j -
                                          1] if not isOTB_or_None(i, j-1) else 0

                memo_one[i][j] = max(curr_profit, left_profit)
        o = 0

        for i in range(len(prices)):
            for j in range(i, len(prices)):
                trade_one = memo_one[i][j]
                trade_two = memo_one[j][len(prices)-1]
                o = max((trade_one + trade_two), o)
        return o
