# // _NAME: Decode String
# // _LINK: https://leetcode.com/problems/decode-string/
# // _CATEGORY: String


class Solution:
    def decodeString(self, s: str) -> str:

        stack = []

        def popTillOpen(stack):

            sub_s = []
            multi = 0
            n = 0

            while stack[-1] != '[':
                sub_s.append(stack.pop())

            # stack will be '[' position
            stack.pop()

            while stack and stack[-1].isdigit():
                multi += int(stack.pop()) * 10**n
                n += 1

            sub_s.reverse()

            return multi, ''.join(sub_s)

        def evaluate(m, s):

            return s * m

        for c in s:
            if c == ']':
                multi, sub_s = popTillOpen(stack)
                stack.append(evaluate(multi, sub_s))
            else:
                stack.append(c)

        return ''.join(stack)
