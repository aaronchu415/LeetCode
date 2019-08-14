# // _NAME: Max Increase to Keep City Skyline
# // _LINK: https://leetcode.com/problems/max-increase-to-keep-city-skyline/
# // _CATEGORY: Array


class Solution:
    def maxIncreaseKeepingSkyline(self, grid: List[List[int]]) -> int:
        #         left and right is max of up down
        #         top and bottom is max of left and right

        #         update with min of max(up/down) and  max(left right)
        #         skip (special)

        #         3   0  "8"  4
        #         2  "4"  5  "7"
        #        "9"  2   6   3
        #         0  "3"  1   0

        #         8   4  "8"  7
        #         7  "4"  7  "7"
        #        "9"  4   8   7
        #         3  "3"  3   3

        o = 0

        vlist = list(zip(*grid))

        for i in range(len(grid)):
            for j in range(len(grid[i])):

                # get max of up and down
                up_down = max(vlist[j])

                # get max of left and right
                left_right = max(grid[i])

                # update to min of up_down and left_right
                o += min(up_down, left_right) - grid[i][j]
        return o
