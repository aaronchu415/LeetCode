// _NAME: Lowest Common Ancestor of a Binary Tree
// _LINK: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

  let depthObj = {};

  let pAncestor = []
  let qAncestor = []

  var dfs = function (node, depth, ancestor) {
    if (node === null) return;

    let copyAncestor = [...ancestor, node.val]

    if (node.val === p.val) pAncestor = copyAncestor
    if (node.val === q.val) qAncestor = copyAncestor

    depthObj[node.val] = { depth, node }

    ancestor.push(node.val)
    dfs(node.left, depth + 1, ancestor)
    dfs(node.right, depth + 1, ancestor)
    ancestor.pop()

  }

  dfs(root, 1, [])


  let val = findLCA(pAncestor, qAncestor)
  return depthObj[val].node

};

var findLCA = function (arr1, arr2) {
  arr1.reverse()
  arr2.reverse()

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    let diff1 = arr1.length - i
    let diff2 = arr2.length - j

    if (arr1[i] === arr2[j]) return arr1[i]

    if (diff1 === diff2) {
      i++
      j++
    }
    else if (diff1 > diff2) {
      i++
    }
    else if (diff1 < diff2) {
      j++
    }
  }

}