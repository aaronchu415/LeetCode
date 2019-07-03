// _NAME: Search in a Binary Search Tree
// _LINK: https://leetcode.com/problems/search-in-a-binary-search-tree/
// _CATEGORY: Iteration-Conditionals

/**

Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {

  let output = null

  function dfs(node) {
    if (output !== null) return
    if (!node) return

    if (node.val === val) output = node

    if (val < node.val) dfs(node.left)
    else dfs(node.right)

  }

  dfs(root)

  return output
};
