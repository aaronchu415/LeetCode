# // _NAME: Valid Palindrome II
# // _LINK: https://leetcode.com/problems/valid-palindrome-ii/
# // _CATEGORY: String


class Solution:
    def validPalindrome(self, s: str) -> bool:

        l = 0
        r = len(s)-1

        def isPali(s):
            l = 0
            r = len(s)-1

            while(l < r):
                if s[l] != s[r]:
                    return False
                l += 1
                r -= 1
            return True

        while(l < r):

            if s[l] != s[r]:
                return isPali(s[0:l] + s[l+1:]) or isPali(s[0:r] + s[r+1:])

            l += 1
            r -= 1
        return True
