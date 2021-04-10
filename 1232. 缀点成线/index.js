/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let [preDifX, preDifY] = getDIf(coordinates, 0);

  for (let i = 1; i < coordinates.length - 1; ++i) {
    const [curDifX, curDifY] = getDIf(coordinates, i);
    if (preDifX * curDifY !== curDifX * preDifY) return false;
    preDifX = curDifX, preDifY = curDifY;
  }

  return true;
};

const getDIf = (arr, i) => [arr[i + 1][0] - arr[i][0], arr[i + 1][1] - arr[i][1]];