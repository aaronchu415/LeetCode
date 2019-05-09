# // _NAME: NarayTreePreorderTraversal
# // _LINK: https://leetcode.com/problems/n-ary-tree-preorder-traversal/
# // _CATEGORY: Array-Integers

# Given an n-ary tree, return the preorder traversal of its nodes' values.

# For example, given a 3-ary tree:

# Return its preorder traversal as: [1,3,5,6,2,4].
"""
# Definition for a Node.
class Node:
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""


class Solution:

    def __init__(self):
        self.result = []

    def preorder(self, root: 'Node') -> List[int]:

        self.helper(root)
        return self.result

    def helper(self, node):

        if not node:
            return

        self.result.append(node.val)

        for childNode in node.children:
            self.helper(childNode)
