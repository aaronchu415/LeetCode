// _NAME: Find Mode in Binary Search Tree
// _LINK: https://leetcode.com/problems/find-mode-in-binary-search-tree/
// _CATEGORY: Binary Search Tree

/**
Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {

  let memo = {}

  function _dfs(node) {
    if (!node) return

    if (memo[node.val]) memo[node.val]++
    else memo[node.val] = 1

    _dfs(node.left)
    _dfs(node.right)
  }

  _dfs(root)

  let max = Math.max(...Object.values(memo))

  let output = []

  for (let key of Object.keys(memo)) {
    if (memo[key] === max) output.push(key)
  }

  return output


};
