# // _NAME: Longest Increasing Subsequence
# // _LINK: https://leetcode.com/problems/longest-increasing-subsequence/
# // _CATEGORY: Array

# Given an unsorted array of integers, find the length of longest increasing subsequence.

# Input: [10,9,2,5,3,7,101,18]
# Output: 4
# Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.


class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:

        if not nums:
            return 0

        memo = [1] * len(nums)

        for i in range(len(nums)):
            if i == 0:
                continue

            curr = nums[i]
            prevNums = nums[0:i]
            maxs = []
            for j in range(len(prevNums)):
                if prevNums[j] < curr:
                    maxs.append(memo[j])
            if maxs:
                largest = max(maxs)
                memo[i] = 1 + largest

        return max(memo)
