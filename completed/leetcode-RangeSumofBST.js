// _NAME: Range Sum of BST
// _LINK: https://leetcode.com/problems/range-sum-of-bst/
// _CATEGORY: BST

/**
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {

  let s = 0;

  function _dfs(node) {
    if (!node) return

    if (node.val >= L && node.val <= R) s += node.val
    _dfs(node.left)
    _dfs(node.right)
  }

  _dfs(root)

  return s
};