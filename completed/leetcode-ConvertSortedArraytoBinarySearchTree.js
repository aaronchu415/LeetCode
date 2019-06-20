// _NAME: Convert Sorted Array to Binary Search Tree
// _LINK: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// _CATEGORY: Binary Search Tree

/**
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {

  var helper = function (start, end, arr) {

    if (start > end) return null
    if (start === end) return new TreeNode(arr[start])

    let piv = Math.floor((start + end) / 2)
    let node = new TreeNode(nums[piv])

    node.left = helper(start, piv - 1, arr)
    node.right = helper(piv + 1, end, arr)

    return node
  }

  return helper(0, nums.length - 1, nums)
};