# // _NAME: Target Sum
# // _LINK: https://leetcode.com/problems/target-sum/
# // _CATEGORY: Array


class Solution:
    def findTargetSumWays(self, nums: List[int], S: int) -> int:

        memo_container = [None] * (len(nums))

        for i in range(len(nums)):
            memo = {}
            if i == 0:
                if nums[i] == -nums[i]:
                    memo[nums[i]] = 2
                else:
                    memo[nums[i]] = 1
                    memo[-nums[i]] = 1
            else:
                prev_memo = memo_container[i-1]
                for key in prev_memo:
                    key_add = key + nums[i]
                    key_sub = key - nums[i]

                    key_val = prev_memo[key]

                    if key_add == key_sub:
                        key_val = key_val * 2
                        memo[key_add] = memo[key_add] + \
                            key_val if key_add in memo else key_val
                    else:
                        memo[key_add] = memo[key_add] + \
                            key_val if key_add in memo else key_val
                        memo[key_sub] = memo[key_sub] + \
                            key_val if key_sub in memo else key_val

            memo_container[i] = memo

        return memo_container[-1].get(S, 0)
