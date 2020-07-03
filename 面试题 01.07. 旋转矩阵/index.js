/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length;
  for (let i = 1; i < n; i++) {
    let j = i;
    while (j--) {
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
    }
  }
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix;
};