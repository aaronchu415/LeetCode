# // _NAME: NarayTreePostOrderTraversal
# // _LINK: https://leetcode.com/problems/n-ary-tree-postorder-traversal/
# // _CATEGORY: Tree

# Given an n-ary tree, return the postorder traversal of its nodes' values.

# For example, given a 3-ary tree:

# Return its postorder traversal as: [5,6,3,2,4,1].

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

    def postorder(self, root: 'Node') -> List[int]:

        self.helper(root)
        return self.result

    def helper(self, node):

        if not node:
            return

        for child in node.children:
            self.helper(child)

        self.result.append(node.val)
