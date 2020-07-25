/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const arr = Array.from({ length: n }, () => new Array(n));
  let i = 0, j = -1, k = 0;

  while (k < n * n) {
    /* 向右运动 */
    while (j < n - 1 && !arr[i][j + 1]) {
      k++;
      arr[i][++j] = k;
    }
    /* 向下运动 */
    while (i < n - 1 && !arr[i + 1][j]) {
      k++;
      arr[++i][j] = k;
    }
    /* 向左运动 */
    while (j > 0 && !arr[i][j - 1]) {
      k++;
      arr[i][--j] = k;
    }
    /* 向上运动 */
    while (i > 0 && !arr[i - 1][j]) {
      k++;
      arr[--i][j] = k;
    }
  }

  return arr;
};