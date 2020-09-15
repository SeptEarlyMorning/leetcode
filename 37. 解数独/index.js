/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  /* 递归回溯 + 哈希表 */
  const squareNumsSet = Array.from({ length: 9 }, () => new Set()),
    horizontalNumsSet = Array.from({ length: 9 }, () => new Set()), // 横
    verticalNumsSet = Array.from({ length: 9 }, () => new Set()); // 竖
  let key = false;

  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (board[i][j] !== '.') {
        squareNumsSet[(Math.floor(i / 3) * 3) + Math.floor(j / 3)].add(+board[i][j]);
        horizontalNumsSet[i].add(+board[i][j]);
        verticalNumsSet[j].add(+board[i][j]);
      }
    }
  }

  const dfs = (i, j) => {
    if (i >= 9) { key = true; return; };
    if (j >= 9) return dfs(i + 1, 0);
    if (board[i][j] === '.') {
      let x = 1;
      for (; x <= 9; ++x) {
        if (squareNumsSet[(Math.floor(i / 3) * 3) + Math.floor(j / 3)].has(x) || horizontalNumsSet[i].has(x) || verticalNumsSet[j].has(x)) {
          continue;
        }
        board[i][j] = x + '';
        squareNumsSet[(Math.floor(i / 3) * 3) + Math.floor(j / 3)].add(x);
        horizontalNumsSet[i].add(x);
        verticalNumsSet[j].add(x);
        dfs(i, j + 1);
        if (key) return;
        squareNumsSet[(Math.floor(i / 3) * 3) + Math.floor(j / 3)].delete(x);
        horizontalNumsSet[i].delete(x);
        verticalNumsSet[j].delete(x);
        board[i][j] = '.';
      }
      if (x > 9) return;
    }
    dfs(i, j + 1);
  };

  dfs(0, 0);
};