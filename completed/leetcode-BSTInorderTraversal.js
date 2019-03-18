// _NAME: Binary Tree Inorder Traversal
// _LINK: https://leetcode.com/problems/binary-tree-inorder-traversal/
// _CATEGORY: Binary Tree

/**
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?

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

var inorderTraversal = function (root) {

  let callStack = []
  let curr = root
  let output = []

  while (callStack.length > 0 || curr !== null) {

    //add left side
    while (curr !== null) {
      callStack.push(curr)
      curr = curr.left
    }

    //after adding left side, we will pop the current left node
    curr = callStack.pop()

    //add val to output
    output.push(curr.val)

    //traverse right node
    curr = curr.right;

  }


  console.log(output)
  return output


};