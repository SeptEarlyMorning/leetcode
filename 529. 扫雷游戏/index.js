/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  const n = board.length, m = board[0].length;
  const direction = [[1, -1], [1, 0], [1, 1], [0, -1], [0, 1], [-1, -1], [-1, 0], [-1, 1]]; // 模拟方向

  const getMineNum = (i, j) => { // 获取周围雷的数量
    let mineNum = 0;
    for (const [x, y] of direction) {
      mineNum += isMine(i + x, j + y);
    }
    return mineNum + '';
  };

  const isMine = (i, j) => { // 是否为雷
    if (i < 0 || i >= n || j < 0 || j >= m || board[i][j] !== 'M') return 0;
    return 1;
  }

  /* dfs */
  const dfs = (i, j) => {
    if (i < 0 || i >= n || j < 0 || j >= m) return;
    if (board[i][j] !== 'E') {
      if (board[i][j] === 'M') {
        board[i][j] = 'X';
      }
      return;
    }
    board[i][j] = getMineNum(i, j);
    if (board[i][j] === '0') {
      board[i][j] = 'B';
      for (const [x, y] of direction) {
        dfs(i + x, j + y);
      }
    }
  };

  dfs(...click);
  return board;

  /* bfs */
  // const que = [click];

  // while (que.length) {
  //   const [i, j] = que.shift();

  //   if (i < 0 || i >= n || j < 0 || j >= m) continue;
  //   if (board[i][j] !== 'E') {
  //     if (board[i][j] === 'M') { // 点击时就碰到了雷
  //       board[i][j] = 'X';
  //     }
  //     continue;
  //   }

  //   board[i][j] = getMineNum(i, j);
  //   if (board[i][j] === '0') {
  //     board[i][j] = 'B';
  //     for (const [x, y] of direction) {
  //       que.push([i + x, j + y]);
  //     }
  //   }
  // }

  // return board;
};