# // _NAME: Binary Tree Inorder Traversal O(N) Time O(1) Space (9.10)
# // _LINK: https://elementsofprogramminginterviews.com/
# // _CATEGORY: EPI


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
        self.parent = None

    def __repr__(self):
        return f"- {self.val}-"


class Solution:

    def addParent(self, prev, node):

        if not node:
            return

        node.parent = prev

        self.addParent(node, node.left)
        self.addParent(node, node.right)

    def inorderTraversal(self, root: TreeNode):

        self.addParent(None, root)

        result = []
        prev = None
        curr = root

        while(curr):

            # if came from parent, go as far left
            # print(prev, curr, result)
            if prev == curr.parent:
                while(curr.left):
                    prev = curr
                    curr = curr.left
                result.append(curr.val)

                # go back up if leaf else go right
                if not curr.right and not curr.left:
                    prev = curr
                    curr = curr.parent

                # go to right if right child is availabe
                if curr.right and not curr.left:
                    prev = curr
                    curr = curr.right

            # if came from left child, go right child
            elif prev == curr.left:
                result.append(curr.val)
                if(curr.right):
                    prev = curr
                    curr = curr.right
                else:
                    prev = curr
                    curr = curr.parent

            # came from right child then we are done with parent
            else:
                prev = curr
                curr = curr.parent

        return result


n1 = TreeNode(1)
n2 = TreeNode(2)
n3 = TreeNode(3)
n1.right = n2
n2.left = n3

so = Solution()
so.addParent(None, n1)
print(so.inorderTraversal(n1))
