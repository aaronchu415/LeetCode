# // _NAME: Delete Nodes And Return Forest
# // _LINK: https://leetcode.com/problems/delete-nodes-and-return-forest/
# // _CATEGORY: Binary Tree

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def delNodes(self, root: TreeNode, to_delete: List[int]) -> List[TreeNode]:

        memo = {}

        o = [root] if root.val not in to_delete else []

        def dfs(node, parent):
            if not node:
                return

            memo[node] = parent

            dfs(node.left, node)
            dfs(node.right, node)

        dfs(root, None)

        # loop through items to delete
        for val in to_delete:

            # find the node
            for node_key in memo:

                # check to see if this is the node we want
                if node_key.val == val:
                    # if there is left
                    if node_key.left:
                        # left will be orphan so add into the output IF it is not                         going in the hit list
                        if node_key.left.val not in to_delete:
                            o.append(node_key.left)
                    if node_key.right:
                        if node_key.right.val not in to_delete:
                            o.append(node_key.right)

                    node_key.left = None
                    node_key.right = None

                    # go to parent and remove connection if exist
                    parent = memo[node_key]
                    if parent:
                        if parent.left and parent.left.val == node_key.val:
                            parent.left = None
                        elif parent.right and parent.right.val == node_key.val:
                            parent.right = None

        return o
