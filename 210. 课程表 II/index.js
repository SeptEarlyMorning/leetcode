/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const adjs = Array.from({ length: numCourses }, () => []);
  for (const [u, v] of prerequisites) {
    adjs[v].push(u);
  }
  const seen = new Set();
  const seeing = new Set();
  const result = [];
  const dfs = (v) => {
    if (seen.has(v)) { return true; }
    if (seeing.has(v)) { return false; } // 环
    seeing.add(v);
    for (const u of adjs[v]) {
      if (!dfs(u)) { return false; } // 环
    }
    seeing.delete(v);
    seen.add(v);
    result.unshift(v);
    return true;
  }
  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) { return []; }
  }
  return result;
};

console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));
