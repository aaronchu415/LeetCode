// _NAME: Validate Binary Search Tree
// _LINK: https://leetcode.com/problems/validate-binary-search-tree/
// _CATEGORY: Binary Search Tree

/**
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
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
 * @return {boolean}
 */
var isValidBST = function (root) {

  function helper(node, greater, smaller) {
    if (!node) return true

    let VALID_NODE_G = greater.every(n => node.val > n)
    let VALID_NODE_S = smaller.every(n => node.val < n)

    let LEFT_CHILD = true
    let RIGHT_CHILD = true


    if (node.left)
      LEFT_CHILD = node.val > node.left.val

    if (node.right)
      RIGHT_CHILD = node.val < node.right.val

    return VALID_NODE_G && VALID_NODE_S && LEFT_CHILD && RIGHT_CHILD && helper(node.left, [...greater], [...smaller, node.val]) && helper(node.right, [...greater, node.val], [...smaller])
  }

  return helper(root, [], [])
};
