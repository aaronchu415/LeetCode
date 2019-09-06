# // _NAME: LRU Cache
# // _LINK: https://leetcode.com/problems/lru-cache/
# // _CATEGORY: LRU


class Node:

    def __init__(self, val):
        self.val = val
        self.prev = None
        self.next = None

    def __repr__(self):
        return f"Node-{self.val}"


class DLL:

    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0
        self.lookup = {}

    def _addToFront(self, node):
        prev_first = self.first
        prev_first.prev = node
        node.next = prev_first

        self.first = node

    def add(self, key):
        node = Node(key)

        # if first one then just add
        if not self.first and not self.last:
            self.first = node
            self.last = node

        # else add to front
        else:
            self._addToFront(node)

        # add node to lookup table
        self.lookup[key] = node
        # increment size by 1
        self.size += 1

    # remove and return LRU key
    def removeAndReturnLRU(self):

        if self.size == 0:
            return None

        # lru is in the last position
        lru = self.last
        # delete the key from lookup table
        del self.lookup[lru.val]

        # if dll is 1 then after returning, reset self.first and self.last
        if self.size == 1:
            self.first = None
            self.last = None
        else:
            # set self.last
            lru_prev = lru.prev
            lru_prev.next = None
            self.last = lru_prev

        # decrease by 1
        self.size -= 1

        # return lru key
        return lru.val

    def moveKeyToTop(self, key):
        node = self.lookup[key]

        if self.size == 1:
            return

        if node == self.last:
            self.last = node.prev

        if node != self.first:
            node_prev = node.prev
            node_next = node.next

            node_prev.next = node_next
            if node_next:
                node_next.prev = node_prev

            node.prev = None
            node.next = self.first
            self.first.prev = node
            self.first = node


class LRUCache:

    def __init__(self, capacity: int):
        self.size = capacity
        self.cache = {}
        self.dll = DLL()

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1

        self.dll.moveKeyToTop(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:

        if key in self.cache:
            self.cache[key] = value
            # refresh key in dll
            self.dll.moveKeyToTop(key)
            return

        if self.dll.size >= self.size:
            self._removeLRU()

        self.dll.add(key)
        self.cache[key] = value

    def _removeLRU(self):
        lru = self.dll.removeAndReturnLRU()
        del self.cache[lru]
