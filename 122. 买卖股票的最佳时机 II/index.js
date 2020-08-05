/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /* 找极值法 */
  // const len = prices.length;
  // let maxProfitNum = 0, i = 0;

  // while (i < len) {
  //   let j = i + 1;
  //   while (j < len && prices[j] > prices[j - 1]) {
  //     ++j;
  //   }
  //   maxProfitNum += (prices[j - 1] - prices[i]);
  //   i = j;
  // }

  // return maxProfitNum;

  /* 每遍历一次就判断一次，相比于极值法更加简洁 */
  let maxProfitNum = 0;

  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] > prices[i - 1]) {
      maxProfitNum += (prices[i] - prices[i - 1]);
    }
  }

  return maxProfitNum;
};