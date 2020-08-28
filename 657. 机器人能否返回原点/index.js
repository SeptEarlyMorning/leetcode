/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0, y = 0;

  for (const move of moves) {
    switch (move) {
      case 'U':
        ++y;
        break;
      case 'D':
        --y;
        break;
      case 'L':
        --x;
        break;
      case 'R':
        ++x;
        break;
      default: break;
    }
  }

  return x === 0 && y === 0;
};