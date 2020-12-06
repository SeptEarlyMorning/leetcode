/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows <= 0) return [];
  const yanghuiTriangle = [[1]];

  for (let i = 1; i < numRows; ++i) {
    yanghuiTriangle.push([1]);
    for (let j = 1; j < i; ++j) {
      yanghuiTriangle[i].push(yanghuiTriangle[i - 1][j] + yanghuiTriangle[i - 1][j - 1]);
    }
    yanghuiTriangle[i].push(1);
  }

  return yanghuiTriangle;
};