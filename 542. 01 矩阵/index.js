var updateMatrix = function (matrix) {
  // dp optimise
  if (matrix.length == 0) {
    return [];
  }
  let m = matrix.length, n = matrix[0].length;
  // left-top to right-bottom
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] != 0) {
        matrix[i][j] = m + n;
        if (i > 0) {
          matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j]);
        }
        if (j > 0) {
          matrix[i][j] = Math.min(matrix[i][j - 1] + 1, matrix[i][j]);
        }
      }
    }
  }
  // right-bottom to left-top
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // distance
      if (matrix[i][j] != 0) {
        if (j < n - 1) {
          matrix[i][j] = Math.min(matrix[i][j], matrix[i][j + 1] + 1);
        }
        if (i < matrix.length - 1) {
          matrix[i][j] = Math.min(matrix[i][j], matrix[i + 1][j] + 1);
        }
      }
    }
  }
  return matrix;
};