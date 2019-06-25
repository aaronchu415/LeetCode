// _NAME: Merge Two Binary Trees
// _LINK: https://leetcode.com/problems/merge-two-binary-trees/
// _CATEGORY: Binary Tree

/**

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {

  function helper(node1, node2) {

    if (!node1 && !node2) return null

    if (node1 && node2) {
      let node = new TreeNode(node1.val + node2.val)
      node.left = helper(node1.left, node2.left)
      node.right = helper(node1.right, node2.right)
      return node
    }

    if (node1 !== null && node2 === null) {
      let node = new TreeNode(node1.val)
      node.left = node1.left
      node.right = node1.right
      return node
    }

    if (node1 === null && node2 !== null) {
      let node = new TreeNode(node2.val)
      node.left = node2.left
      node.right = node2.right
      return node
    }

  }

  return helper(t1, t2)

};
