/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  /* 左右两次遍历 */
  // const len = ratings.length, candyArr = new Array(len).fill(1);

  // for (let i = 1; i < len; ++i) {
  //   if (ratings[i] > ratings[i - 1]) {
  //     candyArr[i] = candyArr[i - 1] + 1;
  //   }
  // }

  // let sum = candyArr[len - 1];
  // for (let i = len - 2; i >= 0; --i) {
  //   if (ratings[i] > ratings[i + 1] && candyArr[i] <= candyArr[i + 1]) {
  //     candyArr[i] = candyArr[i + 1] + 1;
  //   }
  //   sum += candyArr[i];
  // }

  // return sum;

  /* 一次遍历 */
  let sum = 1, pre = 1, up = 1, down = 0;

  for (let i = 1; i < ratings.length; ++i) {
    if (ratings[i] >= ratings[i - 1]) {
      up = ratings[i] === ratings[i - 1] ? 1 : up + 1;
      pre = up; sum += up; down = 0;
    } else {
      if (++down === pre)++down;
      sum += down; up = 1;
    }
  }

  return sum;
};