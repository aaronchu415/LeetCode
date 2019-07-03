// _NAME: Trim a Binary Search Tree
// _LINK: https://leetcode.com/problems/trim-a-binary-search-tree/
// _CATEGORY: BST

/**
Given a binary search tree and the lowest and highest boundaries as L and R, trim the tree so that all its elements lies in [L, R] (R >= L). You might need to change the root of the tree, so the result should return the new root of the trimmed binary search tree./**
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
 * @return {TreeNode}
 */
var trimBST = function (root, L, R) {

  function helper(node) {

    if (!node) return null

    //if node is at at the lower bound then remove everything to the left
    if (node.val === L) {
      node.left = null
    }

    //if node is at the top bound then remove evverything to the right
    if (node.val === R) {
      node.right = null
    }

    //if node.val is LESS than the L bound then return only the nodes to the right
    if (node.val < L) {
      return helper(node.right)
    }

    //if node.val is above the higher bound then we want to return the child to         //the left
    if (node.val > R) {
      return helper(node.left)
    }

    //reset left and right
    node.left = helper(node.left)
    node.right = helper(node.right)

    return node

  }

  return helper(root)
};
