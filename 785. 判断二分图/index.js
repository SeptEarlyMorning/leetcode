/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  /* bfs + 染色法 */
  // const len = graph.length;
  // const colors = new Array(len).fill(0); // 用于存储染色信息的数组，0 表示未染色，1 表示染成红色，2 表示染成绿色

  // for (let i = 0; i < len; i++) {
  //   if (!colors[i]) {
  //     let que = [i];
  //     colors[i] = 1;
  //     while (que.length) {
  //       const key = que.shift();
  //       for (const item of graph[key]) {
  //         const color = colors[key] === 1 ? 2 : 1;
  //         if (colors[item]) {
  //           if (colors[item] !== color) return false;
  //         } else {
  //           colors[item] = color;
  //           que.push(item);
  //         }
  //       }
  //     }
  //   }
  // }
  // return true;

  /* dfs + 染色法 */
  const colors = new Array(graph.length).fill(0); // 用于存储染色信息的数组，0 表示未染色，1 表示染成红色，2 表示染成绿色
  return colors.every((value, index) => value === 0 ? dfs(index, graph, colors, 1) : true); // 如果已经被染色就不必在递归了
};

const dfs = (i, graph, colors, color) => {
  if (colors[i]) { // 递归出口，如果已被染色，则判断是否与要被染色的颜色一致
    if (colors[i] !== color) return false; // 不一致 return false
    return true; // 一致 return true
  }
  colors[i] = color; // 未被染色，则将其染色
  return graph[i].every(value => dfs(value, graph, colors, color === 1 ? 2 : 1));
};