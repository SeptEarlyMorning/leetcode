/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // if (DFS_map(0, word, board, i, j, new Map())) return true;
      if (DFS(0, word, board, i, j)) return true;
    }
  }
  return false;
};

const DFS_map = (m, word, board, nowI, nowJ, map) => {
  if (m < word.length) {
    const key = nowI + '-' + nowJ;
    if (nowI >= 0 && nowI < board.length && nowJ >= 0 && nowJ < board[nowI].length && !map.get(key) && board[nowI][nowJ] === word[m]) {
      map.set(key, true);
      const success = DFS_map(m + 1, word, board, nowI + 1, nowJ, map)
        || DFS_map(m + 1, word, board, nowI - 1, nowJ, map)
        || DFS_map(m + 1, word, board, nowI, nowJ + 1, map)
        || DFS_map(m + 1, word, board, nowI, nowJ - 1, map);
      map.set(key, success);
      return success;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

const DFS = (m, word, board, nowI, nowJ) => {
  if (m < word.length) {
    if (nowI >= 0 && nowI < board.length && nowJ >= 0 && nowJ < board[nowI].length && board[nowI][nowJ] === word[m]) {
      const item = board[nowI][nowJ];
      board[nowI][nowJ] = null;
      const success = DFS(m + 1, word, board, nowI + 1, nowJ)
        || DFS(m + 1, word, board, nowI - 1, nowJ)
        || DFS(m + 1, word, board, nowI, nowJ + 1)
        || DFS(m + 1, word, board, nowI, nowJ - 1);
      board[nowI][nowJ] = item;
      return success;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
];
const test1 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
];
const test2 = [
  ["A", "B", "C", "E"],
  ["S", "F", "E", "S"],
  ["A", "D", "E", "E"]
];

console.log(exist(board, 'ABCCED'));
console.log(exist(test1, 'ABAC'));
console.log(exist(test2, 'ABCESEEEFS'));