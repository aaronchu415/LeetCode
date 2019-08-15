# // _NAME: Basic Calculator II
# // _LINK: https://leetcode.com/problems/basic-calculator-ii/
# // _CATEGORY: String


class Solution:
    def calculate(self, s: str) -> int:

        s = s.replace(' ', '')

        def convertExpression(s):

            s = s[::-1]

            output = []

            n = 0
            multi = 0

            for el in s:
                if el.isdigit():
                    n += int(el) * 10**multi
                    multi += 1
                else:
                    output.append(n)
                    n = 0
                    multi = 0
                    output.append(el)

            output.append(n)
            output.reverse()
            return output

        def eval_multi_divide(n1, exp, n2):

            if exp == '*':
                return n1 * n2
            if exp == '/':
                return n1 // n2

        def eval_add_sub(nums):

            o = 0

            for i in range(len(nums)):
                if i == 0:
                    o += nums[i]

                elif isinstance(nums[i], int):
                    ops = nums[i-1]
                    if ops == '+':
                        o += nums[i]
                    else:
                        o -= nums[i]
            return o

        arr = convertExpression(s)
        stack = []

        i = 0

        while i < len(arr):

            x = arr[i]

            if isinstance(x, int):
                stack.append(x)
            elif x == '+' or x == '-':
                stack.append(x)
            else:
                stack.append(eval_multi_divide(stack.pop(), x, arr[i+1]))
                i += 1
            i += 1

        return eval_add_sub(stack)
