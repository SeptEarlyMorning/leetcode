/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const res = [];
  const map = {};

  for (const ticket of tickets) { // 建表
    const [from, to] = ticket;
    if (!map[from]) {
      map[from] = [];
    }
    map[from].push(to);
  }
  for (const city in map) {
    map[city].sort();
  }

  const dfs = (node) => { // 当前城市
    const nextNodes = map[node]; // 当前城市的邻接城市
    while (nextNodes && nextNodes.length) { // 遍历，一次迭代设置一个递归分支
      const next = nextNodes.shift(); // 获取并移除第一项，字母小的城市
      dfs(next);                      // 向下递归
    }
    // 当前城市没有下一站，就把他加到res里，递归开始向上返回，选过的城市一个个推入res 
    res.unshift(node);
  };

  dfs('JFK'); // 起点城市
  return res;
};