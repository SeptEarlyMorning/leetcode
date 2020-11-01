/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const len = s.length;
  const dict = new Set(wordDict);
  const memo = new Array(len);

  function dfs(start) {
    if (memo[start]) {
      return memo[start];
    }
    if (start > s.length - 1) {
      return [[]];
    }
    const res = [];
    for (let i = start + 1; i <= len; i++) {
      const word = s.substring(start, i);
      if (dict.has(word)) {
        const restRes = dfs(i);
        for (const restWords of restRes) {
          res.push([word].concat(restWords));
        }
      }
    }
    memo[start] = res;
    return res;
  }
  return dfs(0).map((words) => {
    return words.join(' ');
  });
};
