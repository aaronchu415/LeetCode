// _NAME: Convert Sorted Array to Binary Search Tree
// _LINK: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// _CATEGORY: Binary Search Tree

/**
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a 
binary tree in which the depth of the two subtrees of every node never 
differ by more than 1.

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5

/**
 * Definition for a binary tree node.  */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

let input = [-10, -3, 0, 5, 9];

var sortedArrayToBST = function(arr) {
  if (arr.lenght === 0) return null;

  let prevTopNode = null;

  for (let i = 0; i < arr.length; i = i + 3) {

    let leftNode = new TreeNode(i);
    let topNode = new TreeNode(i+1);
    let rightNode = new TreeNode(i+2);

    topNode.left = leftNode;
    topNode.right = rightNode;

    prevTopNode = topNode

    topNode2.right = rightNode2;
    topNode2.left = topNode;
  }

  let topNode2 = new TreeNode(5);
  let rightNode2 = new TreeNode(9);

  topNode2.right = rightNode2;
  topNode2.left = topNode;

  console.log(topNode2);
  return topNode2;
};

console.log(sortedArrayToBST(input));
