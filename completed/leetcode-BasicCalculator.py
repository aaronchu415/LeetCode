# // _NAME: Basic Calculator
# // _LINK: https://leetcode.com/problems/basic-calculator/
# // _CATEGORY: String


class Solution:
    def calculate(self, s: str) -> int:

        s.replace(" ", "")
        stack_one = []

        def evalulate(arr):
            # print('---')
            # print('-',arr)
            if not arr:
                return 0

            arr.reverse()

            o = arr[0]

            for i, item in enumerate(arr):
                if i is 0:
                    continue

                if item != '+' and item != '-':
                    prev = arr[i-1]

                    if prev == '-':
                        o -= item
                    else:
                        o += item

            return o

        def popAndEval():

            eval_stack = []

            while True:

                # if stack is empty then break:
                if not stack_one:
                    break

                # pop the last element
                curr_el = stack_one.pop()

                # if we hit an open the break
                if curr_el == '(':
                    break
                # if not open then add to eval_stack
                eval_stack.append(curr_el)

            return evalulate(eval_stack)

        num_s = ''

        for (i, el) in enumerate(s):
            # print(stack_one)
            if el == ' ':
                continue
            elif el is not ')':
                if el != '+' and el != '-' and el != '(':
                    num_s += el
                    if i+1 == len(s) or s[i+1] == '+' or s[i+1] == '-' or s[i+1] == '(' or s[i+1] == ')' or s[i+1] == ' ':
                        stack_one.append(int(num_s))
                        num_s = ''
                else:
                    stack_one.append(el)
            else:
                evalulation = popAndEval()
                stack_one.append(evalulation)

        stack_one.reverse()
        return evalulate(stack_one)
