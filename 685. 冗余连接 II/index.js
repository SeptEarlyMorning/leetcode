/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function (edges) {
  const len = edges.length, indegree = new Array(len + 1).fill(0); // 用数组来存储每个节点的入度情况

  const dfs = (j, n) => { // 判断是否成环，如果成环就返回节点的前继
    for (let x = 0; x < len; ++x) {
      if (edges[x][0] === j) {
        if (edges[x][1] === n) return j;
        return dfs(edges[x][1], n);
      }
    }
  };

  for (const edge of edges) {
    ++indegree[edge[1]];
    if (indegree[edge[1]] === 2) {
      let num = dfs(edge[1], edge[1]);
      if (typeof num === 'number') {
        return [num, edge[1]];
      }
      return edge; // 此时这条边一定是给定数组的后面的边，因为是从前面往后边遍历的
    }
  }

  for (let i = len - 1; i >= 0; --i) { // 从后面往前面遍历，保证是最后一条边
    if (typeof dfs(edges[i][1], edges[i][1]) === 'number') return edges[i];
  }
};