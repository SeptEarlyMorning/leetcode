/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  /* 模拟运动方向 */
  if (!matrix.length) return [];
  const n = matrix.length, m = matrix[0].length, arr = [];
  let k = 0,
    i = 0,
    j = -1, // 从二维数组的左上角matrix[0][0]的左边开始进入
    key = 0; // key 用来记录已经转了几层

  while (k < m * n) {
    while (k < m * n && ++j < m - key) { // 向右运动
      arr.push(matrix[i][j]);
      ++k;
    }
    --j; // 每次完成一个方向的运动后，下标会多运动一格，修正下标

    while (k < m * n && ++i < n - key) { // 向下运动
      arr.push(matrix[i][j]);
      ++k;
    }
    --i;

    while (k < m * n && --j >= key) { // 向左运动
      arr.push(matrix[i][j]);
      ++k;
    }
    ++j;

    while (k < m * n && --i > key) { // 向上运动
      arr.push(matrix[i][j]);
      ++k;
    }
    ++i;

    ++key;
  }

  return arr;
};