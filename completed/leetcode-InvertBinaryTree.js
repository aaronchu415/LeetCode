// _NAME: Invert Binary Tree
// _LINK: https://leetcode.com/problems/invert-binary-tree/
// _CATEGORY: Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {

  function _helper(node) {

    if (!node) return

    //swap 
    [node.left, node.right] = [node.right, node.left]

    _helper(node.left)
    _helper(node.right)
  }

  _helper(root)
  return root

};