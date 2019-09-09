# // _NAME: Sort Stack(3.5)
# // _LINK: http://www.crackingthecodinginterview.com/
# // _CATEGORY: CTCI


class SortStack:

    def __init__(self):
        self.arr = []

    def push(self, val):

        if not self.arr:
            self.arr.append(val)
        else:
            if self.arr[-1] <= val:
                self.arr.append(val)
            elif self.arr[0] >= val:
                self.arr.insert(0, val)
            else:
                for i in range(len(self.arr)-1):
                    if self.arr[i] <= val and self.arr[i+1] > val:
                        self.arr.insert(i, val)
                        break

    def pop(self):
        if not self.arr:
            return None
        return self.arr.pop()

    def peek(self):
        if not self.arr:
            return None

        return self.arr[-1]

    def isEmpty(self):
        return len(self.arr) == 0


my_stack = SortStack()
my_stack.push(1)
my_stack.push(2)
my_stack.push(3)
my_stack.push(-1)
my_stack.push(-2)
my_stack.push(-3)


print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
