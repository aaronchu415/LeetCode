// _NAME: Lowest Common Ancestor of a Binary Search Tree
// _LINK: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// _CATEGORY: Binary Search Tree
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

  var dfs = function (node, depth, ancestor) {
    if (node === null) return;

    let copyAncestor = [...ancestor, node.val]

    depthObj[node.val] = { depth, copyAncestor, node }
    dfs(node.left, depth + 1, copyAncestor)
    dfs(node.right, depth + 1, copyAncestor)
  }

  dfs(root, 1, [])

  let node1 = depthObj[`${p.val}`]
  let node2 = depthObj[`${q.val}`]

  let val = findLCA(node1.copyAncestor, node2.copyAncestor)
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