/**
 * @para
 * m {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const arr = [];
  const dfs = (left, right, s) => {
    if (s.length === 2 * n) {
      arr.push(s);
      return;
    }
    if (left > right) {
      if (left < n) {
        dfs(left + 1, right, s + '(', n);
      }
      dfs(left, right + 1, s + ')', n);
    } else {
      dfs(left + 1, right, s + '(', n);
    }
  };
  dfs(0, 0, '');

  return arr;
};