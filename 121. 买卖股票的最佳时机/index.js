/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let pre = 0, res = 0;

  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] > prices[pre]) {
      res = Math.max(res, prices[i] - prices[pre]);
    } else {
      pre = i;
    }
  }

  return res;
};