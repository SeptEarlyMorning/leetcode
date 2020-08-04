/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  /* bfs */
  const courseInDegree = new Array(numCourses).fill(0); // 初始化该课程的入度为 0
  const coursePreArr = Array.from({ length: numCourses }, () => new Array()); // 学完该课程即可学的课程，使用数组模拟哈希表

  for (let i = 0; i < prerequisites.length; ++i) {
    ++courseInDegree[prerequisites[i][0]];
    coursePreArr[prerequisites[i][1]].push(prerequisites[i][0]);
  }

  const que = [];
  for (let i = 0; i < numCourses; ++i) {
    if (!courseInDegree[i]) que.push(i);
  }

  let unStudyCourses = numCourses;
  while (que.length) {
    --unStudyCourses;
    const key = que.shift();
    for (let i = 0; i < coursePreArr[key].length; ++i) {
      if (!(--courseInDegree[coursePreArr[key][i]])) que.push(coursePreArr[key][i]);
    }
  }

  return !unStudyCourses;
};