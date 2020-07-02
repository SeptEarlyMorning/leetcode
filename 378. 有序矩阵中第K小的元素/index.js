/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  /* 暴力法 */
  // const arr = [];
  // for (item of matrix) {
  //   arr.push(...item);
  // }
  // arr.sort((a, b) => a - b);
  // return arr[k - 1];

  /* 归并排序 */
  // let kVal = 0;
  // for (let i = 0; i < k; i++) {
  //   kVal = matrix[0].shift();
  //   if (matrix[0].length === 0) {
  //     matrix.shift();
  //   } else {
  //     let j = 1;
  //     while (j < matrix.length) {
  //       if (matrix[0][0] <= matrix[j][0]) {
  //         if (j > 1) {
  //           matrix.splice(j - 1, 0, matrix.shift(0));
  //         }
  //         break;
  //       }
  //       j++;
  //     }
  //     if (j === matrix.length) {
  //       matrix.push(matrix.shift(0));
  //     }
  //   }
  // }
  // return kVal;

  /* 二分查找 */
  const n = matrix.length;
  let left = matrix[0][0], right = matrix[n - 1][n - 1];
  while (left < right) {
    let mid = (left + right) >> 1;
    if (check(mid, matrix, n, k)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

const check = (mid, matrix, n, k) => {
  let row = 0, col = n, len = 0;
  while (row < n && col > 0) {
    if (matrix[row][col - 1] <= mid) {
      len += col;
      row++;
    } else {
      col--;
    }
  }
  return len >= k;
};