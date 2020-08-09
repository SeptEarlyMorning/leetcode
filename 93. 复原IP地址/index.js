/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  /* dfs */
  const len = s.length;
  const arr = [];

  if (len < 4 || len > 12) return arr;

  const dfs = (left, right, str, time) => {
    const num = +s.slice(left, right);

    if (num < 0 || num > 255) return;

    if (right >= len) {
      if (time === 3) arr.push(str + num);
      return;
    }
    if (num !== 0) {
      dfs(left, right + 1, str, time);
    }
    str = str + num + '.';
    ++time;
    dfs(right, right + 1, str, time);
  };

  dfs(0, 1, '', 0);
  return arr;
};