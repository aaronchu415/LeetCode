// _NAME: Binary Tree Zigzag Level Order Traversal
// _LINK: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
// _CATEGORY: Binary Tree

/**
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {

  if (!root) return []

  let q = [[root, 1]]
  let output = []
  let depth = 0

  while (q.length !== 0) {
    depth++;
    let nodes = []

    while (q[0] !== undefined && q[0][1] === depth) {
      nodes.push(q.shift())
    }

    // console.log(nodes,depth)

    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i][0].left) q.push([nodes[i][0].left, depth + 1])
      if (nodes[i][0].right) q.push([nodes[i][0].right, depth + 1])
    }

    let row = []

    //if odd then loop regular way, else loop backwards
    if (depth % 2 !== 0) {
      for (let i = 0; i < nodes.length; i++) {
        row.push(nodes[i][0].val)
      }
      output.push(row)
    } else {
      for (let j = nodes.length - 1; j >= 0; j--) {
        row.push(nodes[j][0].val)
      }
      output.push(row)
    }

  }

  return output
};
