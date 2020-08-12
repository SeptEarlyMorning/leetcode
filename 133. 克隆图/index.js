/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  /* bfs */
  // if (!node) return node;
  // const copyNode = new Node(node.val), nodeMap = new Map([[node, copyNode]]), que = [node];

  // while (que.length) {
  //   const nodeItem = que.shift();
  //   const copyNodeItem = nodeMap.get(nodeItem);

  //   for (const neighbor of nodeItem.neighbors) {
  //     if (!nodeMap.has(neighbor)) {
  //       que.push(neighbor);
  //       nodeMap.set(neighbor, new Node(neighbor.val));
  //     }
  //     copyNodeItem.neighbors.push(nodeMap.get(neighbor));
  //   }
  // }

  // return copyNode;

  /* dfs */
  const nodeMap = new Map();

  const dfs = (node) => {
    if (!node) return null;
    if (nodeMap.has(node)) return nodeMap.get(node);

    const copyNode = new Node(node.val);
    nodeMap.set(node, copyNode);

    for (const neighbor of node.neighbors) {
      copyNode.neighbors.push(dfs(neighbor));
    }
    return copyNode;
  };

  return dfs(node);
};