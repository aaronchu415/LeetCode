# // _NAME: Three in One(3.1)
# // _LINK: http://www.crackingthecodinginterview.com/
# // _CATEGORY: CTCI

# use one array to implement three stacks


class ThreeStack:

    def __init__(self):
        self.arr = [None] * 3
        self.i = 0
        self.j = 1
        self.k = 2
        self.largest = 2

    def _updateArr(self):

        self.largest = max(self.i, self.j, self.k)

        diff = self.largest - (len(self.arr)-1)

        for i in range(abs(diff)):
            if diff < 0:
                self.arr.pop()
            else:
                self.arr.append(None)

    def push(self, stack_key, value):

        if stack_key == 'A':
            self.arr[self.i] = value
            self.i += 3
        elif stack_key == 'B':
            self.arr[self.j] = value
            self.j += 3
        elif stack_key == 'C':
            self.arr[self.k] = value
            self.k += 3
        else:
            return

        self._updateArr()

    def pop(self, stack_key):

        val = None

        if stack_key == 'A':

            if self.i == 0:
                return None

            idx = self.i - 3

            val = self.arr[idx]
            self.arr[idx] = None
            self.i = idx

        elif stack_key == 'B':

            if self.j == 1:
                return None

            idx = self.j - 3

            val = self.arr[idx]
            self.arr[idx] = None
            self.j = idx

        elif stack_key == 'C':

            if self.k == 2:
                return None

            idx = self.k - 3

            val = self.arr[idx]
            self.arr[idx] = None
            self.k = idx

        self._updateArr()

        return val


ts = ThreeStack()
ts.push('A', 1)
ts.push('A', 2)
ts.push('A', 3)
ts.push('B', 1)
ts.push('B', 2)
ts.push('B', 3)


print(ts.pop('A'))
print(ts.pop('A'))
print(ts.pop('A'))
print(ts.pop('B'))
print(ts.pop('B'))
print(ts.pop('B'))
print(ts.pop('B'))
print(ts.pop('B'))
ts.push('A', 99)
ts.push('A', 97)
ts.push('A', 98)
print(ts.pop('A'))
print(ts.pop('A'))
print(ts.pop('A'))


print(ts.arr)
