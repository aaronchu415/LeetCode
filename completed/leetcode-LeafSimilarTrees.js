// _NAME: Leaf-Similar Trees
// _LINK: https://leetcode.com/problems/leaf-similar-trees/
// _CATEGORY: Binary Tree

/**
Consider all the leaves of a binary Ctree.  From left to right order, the values of those leaves form a leaf value sequence.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {

  let leaf1 = []
  let leaf2 = []

  function dfs(output, node) {

    if (!node) return

    dfs(output, node.left)
    dfs(output, node.right)

    if (!node.left && !node.right) output.push(node.val)
  }

  dfs(leaf1, root1)
  dfs(leaf2, root2)

  console.log(leaf1, leaf2)

  return leaf1.join('') === leaf2.join('')
};
