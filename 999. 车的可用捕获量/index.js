/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let x, y, xList = [], yList = [], num = 0;
  for (let i = 0; i < 8; i++) {
    y = board[i].indexOf('R');
    if (y !== -1) {
      x = i;
      break;
    }
  }
  xList.push(...board[x]);
  for (let i = 0; i < 8; i++) {
    yList.push(board[i][y]);
  }
  xList = xList.filter(item => item !== '.');
  yList = yList.filter(item => item !== '.');
  x = xList.indexOf('R');
  y = yList.indexOf('R');
  if(xList[x - 1] === 'p') num++;
  if(xList[x + 1] === 'p') num++;
  if(yList[y - 1] === 'p') num++;
  if(yList[y + 1] === 'p') num++;
  console.log(num);
  
  return num;
};

numRookCaptures([[".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", "R", ".", ".", ".", "p"], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."]])