/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const resArr = [];

  const backtracking = (i, j, res, leftDp, rightDp, dp) => {
    if (i >= n) {
      resArr.push(res);
      return;
    }
    if (j >= n) return;
    if (leftDp[j] && rightDp[j] && dp[j]) {
      let s = '';
      for (let k = 0; k < n; ++k) {
        if (k === j) {
          s += 'Q';
        } else {
          s += '.';
        }
      }
      const curLeftDp = [...leftDp], curRightDp = [...rightDp], curDp = [...dp];
      curLeftDp[j] = false, curRightDp[j] = false, curDp[j] = false;
      curLeftDp.shift();
      curLeftDp.push(true)
      curRightDp.pop();
      curRightDp.unshift(true)
      backtracking(i + 1, 0, [...res, s], curLeftDp, curRightDp, curDp);
    }
    backtracking(i, j + 1, [...res], leftDp, rightDp, dp);
  };

  // const isOk = (i, j, res) => {
  //   let leftY = j, rightY = j;

  //   for (let x = i - 1; x >= 0; --x) {
  //     if (res[x][j] === 'Q') return false;
  //     if (--leftY >= 0 && res[x][leftY] === 'Q') return false;
  //     if (++rightY < n && res[x][rightY] === 'Q') return false;
  //   }

  //   return true;
  // };

  backtracking(0, 0, [], new Array(n).fill(true), new Array(n).fill(true), new Array(n).fill(true));

  return resArr;
};