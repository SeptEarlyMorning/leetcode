/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let len = matrix.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const key = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = key;
    }
  }
  for (let i = 0; i < len; i++) {
    matrix[i].reverse();
  }
};