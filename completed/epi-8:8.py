# // _NAME: Implement a Queue using Stacks (8.8)
# // _LINK: https://elementsofprogramminginterviews.com/
# // _CATEGORY: EPI


class Queue:
    def __init__(self):
        self.stack1 = []
        self.stack2 = []

    def enq(self, x):
        self.stack1.append(x)

    def deq(self):
        if len(self.stack1) == 0:
            return None

        while len(self.stack1) > 1:
            self.stack2.append(self.stack1.pop())

        n = self.stack1.pop()

        while self.stack2:
            self.stack1.append(self.stack2.pop())

        return n


q1 = Queue()

q1.enq(1)
q1.enq(2)
q1.enq(3)

print(q1.deq())
print(q1.deq())
print(q1.deq())
print(q1.deq())
print(q1.deq())
