// _NAME: Diameter of Binary Tree
// _LINK: https://leetcode.com/problems/diameter-of-binary-tree/
// _CATEGORY: Array

/**
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {

  let output = 0

  function helper(node) {
    if (!node) return 0

    let left = helper(node.left)
    let right = helper(node.right)
    output = Math.max(left + right, output)

    return 1 + Math.max(left, right)

  }

  helper(root)

  return output

};
