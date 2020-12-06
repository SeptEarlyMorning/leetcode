/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  /* 矩阵思想 */
  const taskCount = new Array(26).fill(0), A = 65;

  for (const task of tasks) {
    ++taskCount[task.charCodeAt() - A];
  }

  let maxCount = Math.max(...taskCount), x = 0;
  for (const count of taskCount) {
    count === maxCount && ++x;
  }

  return Math.max(tasks.length, (maxCount - 1) * (n + 1) + x);
};