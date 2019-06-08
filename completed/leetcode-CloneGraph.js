// _NAME: Clone Graph
// _LINK: https://leetcode.com/problems/clone-graph/
// _CATEGORY: Graph

/**
Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {

  let visited = new Set()
  let visited2 = new Set()
  let nodes = {}

  function dfs(node) {
    if (!node) return

    visited.add(node)
    nodes[node.val] = new Node(node.val, [])
    for (let n of node.neighbors) {
      if (!visited.has(n)) {
        dfs(n)
      }
    }
  }

  function dfs_find(node, val) {

    if (!node) return

    visited2.add(node)

    // console.log('asf',val,node)

    //found node, push neighbords
    if (node.val === Number(val)) {
      let copyNode = nodes[val]
      for (let neighbor of node.neighbors) {
        let key = neighbor.val;
        copyNode.neighbors.push(nodes[key])
      }
    }

    for (let n of node.neighbors) {
      if (!visited2.has(n)) {
        dfs_find(n, val)
      }
    }

  }

  dfs(node)

  for (let n of Object.keys(nodes)) {
    // console.log('asdfasdfsaf',n)
    dfs_find(node, n)
    visited2 = new Set()
  }

  return nodes[Object.keys(nodes)[0]]

};