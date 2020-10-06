/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (N, edges) {
  // 建立映射表，graph[i]：存放与节点i相连的所有节点
  const graph = Array.from({ length: N }, () => []);
  for (const edge of edges) {
    const [from, to] = edge;
    graph[from].push(to);
    graph[to].push(from);
  }

  // distSum[i]：节点i到它所在子树的节点的距离和，后面更新为：节点i到其他所有节点的距离和
  const distSum = new Array(N).fill(0);
  // nodeNum[i]：节点i所在子树的节点个数，保底为1
  const nodeNum = new Array(N).fill(1);

  const postOrder = (root, parent) => {
    const neighbors = graph[root]; // 与它相连的节点们
    for (const neighbor of neighbors) {
      if (neighbor == parent) {    // 如果邻居是自己父亲，跳过。
        continue;                  // 如果邻居只有自己父亲，则for循环结束，当前递归结束  
      }
      postOrder(neighbor, root);
      nodeNum[root] += nodeNum[neighbor];
      distSum[root] += nodeNum[neighbor] + distSum[neighbor];
    }
  };

  const preOrder = (root, parent) => {
    const neighbors = graph[root];
    for (const neighbor of neighbors) {
      if (neighbor == parent) {
        continue;
      }
      distSum[neighbor] = distSum[root] - nodeNum[neighbor] + (N - nodeNum[neighbor]);
      preOrder(neighbor, root);
    }
  };

  postOrder(0, -1); // dfs的入口。因为N>=1，节点0肯定存在，就从节点0开始搜
  preOrder(0, -1);
  return distSum;
};