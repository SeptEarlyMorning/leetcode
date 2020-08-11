/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const n = board.length;
  if (!n) return;

  const m = board[0].length;

  /* dfs */
  const dfs = (x, y) => {
    if (x < 0 || x >= m || y < 0 || y >= n || board[y][x] != 'O') {
      return;
    }
    board[y][x] = 'A';
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  };

  for (let i = 0; i < n; ++i) {
    dfs(0, i);
    dfs(m - 1, i);
  }

  for (let i = 1; i < m - 1; ++i) {
    dfs(i, 0);
    dfs(i, n - 1);
  }

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (board[i][j] === 'A') {
        board[i][j] = 'O';
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }

  /* bfs */
  const que = [];

  for (let i = 0; i < n; ++i) {
    que.push({ x: 0, y: i });
    que.push({ x: m - 1, y: i });
  }

  for (let i = 1; i < m - 1; ++i) {
    que.push({ x: i, y: 0 });
    que.push({ x: i, y: n - 1 });
  }

  while (que.length) {
    const { x, y } = que.shift();
    if (x < 0 || x >= m || y < 0 || y >= n || board[y][x] !== 'O') {
      continue;
    }
    board[y][x] = 'A';
    que.push({ x: x + 1, y: y });
    que.push({ x: x - 1, y: y });
    que.push({ x: x, y: y + 1 });
    que.push({ x: x, y: y - 1 });
  }

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (board[i][j] === 'A') {
        board[i][j] = 'O';
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }
};