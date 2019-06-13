// _NAME: Serialize and Deserialize BST
// _LINK: https://leetcode.com/problems/serialize-and-deserialize-bst/
// _CATEGORY: BST

// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary search tree can be serialized to a string and this string can be deserialized to the original tree structure.

// The encoded string should be as compact as possible.

// Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {

  if (!root) return JSON.stringify({})

  let output = { root: root.val };


  var dfs = function (node) {
    if (!node) return

    let val = node.val
    output[val] = []
    output[val].push(node.left !== null ? node.left.val : null)
    output[val].push(node.right !== null ? node.right.val : null)


    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)

  return JSON.stringify(output)
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function (data) {
  data = JSON.parse(data)
  if (Object.keys(data).length === 0) return null


  let nodes = {}
  for (let key in data) {
    if (key === 'root') continue;
    let newNode = new TreeNode(Number(key));
    nodes[key] = newNode
  }

  for (let key in data) {
    if (key === 'root') continue;
    let [leftN, rightN] = data[key]

    let node = nodes[key]
    if (leftN !== null) node.left = nodes[leftN]
    if (rightN !== null) node.right = nodes[rightN]

  }

  return nodes[data['root']]
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/