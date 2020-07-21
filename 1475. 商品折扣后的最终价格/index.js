/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  /* 暴力法 */
  // for (let i = 0; i < prices.length; i++) {
  //   for (let j = i + 1; j < prices.length; j++) {
  //     if (prices[j] <= prices[i]) {
  //       prices[i] -= prices[j];
  //       break;
  //     }
  //   }
  // }
  // return prices;

  /* 单调栈 */
  const monotonicStack = [];

  for (let i = 0; i < prices.length; i++) {
    while (monotonicStack.length && prices[i] <= prices[monotonicStack[monotonicStack.length - 1]]) {
      prices[monotonicStack.pop()] -= prices[i];
    }
    monotonicStack.push(i);
  }

  return prices;
};