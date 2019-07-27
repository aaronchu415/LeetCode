// _NAME: Squares of a Sorted Array
// _LINK: https://leetcode.com/problems/find-duplicate-subtrees/
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {

  let seen = {}
  let out = []

  function dfs(node) {
    if (!node) return 'N'

    let l = dfs(node.left)
    let r = dfs(node.right)
    let s = `{${l}},{${node.val}},{${r}}`

    if (seen[s]) {
      seen[s]++
      if (seen[s] === 2) out.push(node)
    } else {
      seen[s] = 1
    }


    return s

  }

  dfs(root)
  return out

};
