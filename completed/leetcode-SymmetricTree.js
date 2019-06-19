// _NAME:  Symmetric Tree
// _LINK: https://leetcode.com/problems/symmetric-tree/
// _CATEGORY: Binary Tree

/**
 * 
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3


   */
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
var isSymmetric = function (root) {

  let output = true

  var _bfs = function (node) {

    if (!node) return

    const leftQ = [node.left]
    const rightQ = [node.right]


    while (leftQ.length !== 0 && rightQ.length !== 0) {

      let leftN = leftQ.shift()
      let rightN = rightQ.shift()

      //if one is null and the other is not then return false
      if (leftN !== null && rightN === null) {
        output = false;
        return
      }

      if (leftN === null && rightN !== null) {
        output = false;
        return
      }

      //if both are null then continue
      if (leftN === null && rightN === null) {
        continue
      }

      //else compare value if not equal then return
      if (leftN.val !== rightN.val) {
        output = false
        return
      }

      //else add in its children
      leftQ.push(leftN.left)
      leftQ.push(leftN.right)

      rightQ.push(rightN.right)
      rightQ.push(rightN.left)


    }

  }

  _bfs(root)

  return output


};