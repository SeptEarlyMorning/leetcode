/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
  /* bfs + 剪枝，注释中是用数组来模拟哈希表 */
  const answer = Array.from({ length: quiet.length }, (v, k) => k)
    // , arr = Array.from({ length: quiet.length }, () => []);
    , arr = new Map();

  for (let i = 0; i < richer.length; i++) {
    // arr[richer[i][0]].push(i);
    arr.set(richer[i][0], arr.has(richer[i][0]) ? [...arr.get(richer[i][0]), i] : [i]);
  }
  // for (const key in arr) {
  for (const key of arr.keys()) {
    const que = [key];
    while (que.length) {
      const rich = que.shift();
      // if (arr[rich].length) {
      if (arr.has(rich)) {
        // for (const sub of arr[rich]) {
        for (const sub of arr.get(rich)) {
          if (quiet[answer[richer[sub][1]]] > quiet[answer[rich]]) { // 剪枝
            que.push(richer[sub][1]);
            answer[richer[sub][1]] = answer[rich];
          }
        }
      }
    }
  }

  return answer;
};