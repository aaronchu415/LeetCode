// _NAME: Cousins in Binary Tree
// _LINK: https://leetcode.com/problems/cousins-in-binary-tree/
// _CATEGORY: Binary Tree

/**
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {

  let xParent = null;
  let xDepth = 0;

  let yParent = null;
  let yDepth = 0;


  function _helper(node, x, y, parent, depth) {

    if (!node) return;

    //update
    if (node.val === x) {
      xParent = parent.val;
      xDepth = depth
    }
    if (node.val === y) {
      yParent = parent.val;
      yDepth = depth
    }

    _helper(node.left, x, y, node, depth + 1)
    _helper(node.right, x, y, node, depth + 1)
  }

  _helper(root, x, y, 0, 1)

  // console.log(xParent,xDepth,yParent,yDepth)

  return xDepth === yDepth && xParent !== yParent

};