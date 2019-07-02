# // _NAME: Flatten Nested List Iterator
# // _LINK: https://leetcode.com/problems/flatten-nested-list-iterator/
# // _CATEGORY: Array

# Given a nested list of integers, implement an iterator to flatten it.

# Each element is either an integer, or a list -- whose elements may also be integers or other lists.
# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
# class NestedInteger(object):
#    def isInteger(self):
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        :rtype bool
#        """
#
#    def getInteger(self):
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        :rtype int
#        """
#
#    def getList(self):
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        :rtype List[NestedInteger]
#        """


class NestedIterator(object):

    def __init__(self, nestedList):
        """
        Initialize your data structure here.
        :type nestedList: List[NestedInteger]
        """
        self.flat = []
        self.index = 0
        self.helper(nestedList)

    def helper(self, list):
        for item in list:
            if item.isInteger():
                self.flat.append(item.getInteger())
            else:
                self.helper(item.getList())

    def next(self):
        """
        :rtype: int
        """
        output = self.flat[self.index]
        self.index = self.index + 1
        return output

    def hasNext(self):
        """
        :rtype: bool
        """
        return self.index != len(self.flat)

# Your NestedIterator object will be instantiated and called as such:
# i, v = NestedIterator(nestedList), []
# while i.hasNext(): v.append(i.next())
