// _NAME: Maximum Depth of Binary Tree
// _LINK: https://leetcode.com/problems/maximum-depth-of-binary-tree/
// _CATEGORY: Binary Tree

/**

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest 
path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.


 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }

*/

/*                    Recursion Tree. Example

                    Where: F(x,y) = 1 + max(F(x),F(y))
                    Basecase: F(null,null) === 0

                                        3
                                      / \
                                      9  20
                                        /  \
                                      15   7

                                                      F(3.left ,3.right) === 3
                      F(9.left ,9.right) === 1                                              F(20.left ,20.right) === 2
            F(null ,null) ===0      F(null ,null) === 0                 F(15.left ,15.right) === 1                   F(7.left ,7.right) === 1
                                                                F(null ,null) ===0    F(null ,null) === 0    F(null ,null) ===0    F(null ,null) === 0 

*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let node1 = new TreeNode(3);
let node2 = new TreeNode(9);
let node3 = new TreeNode(20);
let node4 = new TreeNode(15);
let node5 = new TreeNode(7);
let node6 = new TreeNode(11);
let node7 = new TreeNode(11);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;
node5.left = node6;
node6.left = node7;

let input = node1;
var maxDepth = function(root) {
  return helper(root);
};

var helper = function(node) {
  if (node === null) return 0;
  //console.log(node.val);

  return 1 + Math.max(helper(node.left), helper(node.right));
};

console.log(maxDepth(input));
