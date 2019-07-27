# // _NAME: Is String Well-Formed? (8.3)
# // _LINK: https://elementsofprogramminginterviews.com/
# // _CATEGORY: EPI


class Solution:
    def isValid(self, s: str) -> bool:

        stack = []
        LOOKUP = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for p in s:
            if p == "(" or p == "[" or p == "{":
                stack.append(p)
            else:
                counterP = LOOKUP[p]

                if len(stack) == 0:
                    return False
                peak = stack[-1]

                if counterP is not peak:
                    return False
                else:
                    stack.pop()

        return len(stack) == 0
