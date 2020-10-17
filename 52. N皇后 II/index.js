/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  /* 回溯法 */
  // const dfs = (i, left, mid, right) => {
  //   if (i >= n) return 1;

  //   let num = 0;
  //   for (let j = 0; j < n; ++j) {
  //     if (left[j] && mid[j] && right[j]) {
  //       const leftItem = [...left], midItem = [...mid], rightItem = [...right];
  //       leftItem[j] = midItem[j] = rightItem[j] = false;
  //       leftItem.shift();
  //       leftItem.push(true);
  //       rightItem.pop();
  //       rightItem.unshift(true);
  //       num += dfs(i + 1, leftItem, midItem, rightItem);
  //     }
  //   }

  //   return num;
  // };

  // return dfs(0, new Array(n).fill(true), new Array(n).fill(true), new Array(n).fill(true));

  /* 回溯法 + 位运算 */
  const dfs = (i, left, mid, right) => {
    if (i >= n) return 1;

    let optionalLocation = ~(left | mid | right) & ((1 << n) - 1), num = 0;
    while (optionalLocation) {
      let location = -optionalLocation & optionalLocation;
      num += dfs(i + 1, (left | location) << 1, mid | location, (right | location) >> 1);
      optionalLocation &= (optionalLocation - 1);
    }

    return num;
  };

  return dfs(0, 0, 0, 0);
};