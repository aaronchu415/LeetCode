# // _NAME: Flatten Binary Tree to Linked List
# // _LINK: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
# // _CATEGORY: Binary Tree


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def flatten(self, root: TreeNode) -> None:
        """
        Do not return anything, modify root in-place instead.
        """

        def getLastNode(node):
            curr = node
            while(curr.right):
                curr = curr.right
            return curr

        def helper(node):

            if not node:
                return None

            result_left = helper(node.left)
            result_right = helper(node.right)

            if not result_left and not result_right:
                node.right = None
            elif result_left and not result_right:
                node.right = result_left
            elif not result_left and result_right:
                node.right = result_right
            elif result_left and result_right:
                end_right = getLastNode(result_left)
                end_right.right = result_right
                node.right = result_left

            node.left = None

            return node

        return helper(root)
