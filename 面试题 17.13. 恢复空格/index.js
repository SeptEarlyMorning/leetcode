/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
  /* 自己写的垃圾动态规划 */
  // const dictionarySet = new Set(dictionary);
  // const len = sentence.length;
  // const dp = [0];

  // for (let i = 1; i <= len; i++) {
  //   let j = i, currentMin = dp[i - 1] + 1;
  //   dp.push(currentMin);
  //   while (j--) {
  //     if (dictionarySet.has(sentence.slice(j, i))) {
  //       currentMin = Math.min(dp[j], dp[i], currentMin);
  //     }
  //   }
  //   dp[i] = currentMin;
  // }

  // return dp[len];

  /* 别人写的动态规划 */
  const dp = [0];
  const len = sentence.length;
  for (let i = 1; i <= len; i++) {
    dp.push(dp[i - 1] + 1);
    for (let item of dictionary) {
      if (sentence.slice(i - item.length, i) === item) {
        dp[i] = Math.min(dp[i], dp[i - item.length]);
      }
    }
  }

  return dp[len];
};