# // _NAME: Min Stack
# // _LINK: https://leetcode.com/problems/min-stack/
# // _CATEGORY: Stack


class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []
        self.curr_min = 9223372036854775807

    def push(self, x: int) -> None:

        self.curr_min = min(self.curr_min, x)
        self.stack.append((x, self.curr_min))

    def pop(self) -> None:
        if len(self.stack) == 0:
            return

        tup = self.stack.pop()

        if len(self.stack) == 0:
            self.curr_min = 9223372036854775807
        else:
            self.curr_min = self.getMin()

        return tup[0]

    def top(self) -> int:
        if not self.stack:
            return

        return self.stack[-1][0]

    def getMin(self) -> int:
        if not self.stack:
            return
        return self.stack[-1][1]
