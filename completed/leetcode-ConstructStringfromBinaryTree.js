// _NAME: Construct String from Binary Tree
// _LINK: https://leetcode.com/problems/3sum/
// _CATEGORY: Binary Tree

/**
You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {

  let output = '';
  let output2 = [];

  function preorder(node) {
    if (!node) {
      return;
    }

    output = output + '(';
    output = output + node.val;
    if (node.right && !node.left) output = output + '()';
    preorder(node.left);
    preorder(node.right);


    output = output + ')';

  }

  preorder(t);

  return output.substring(1).substring(0, output.substring(1).length - 1);

};
