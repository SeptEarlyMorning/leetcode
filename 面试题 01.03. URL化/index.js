/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
  /* js 原生 API */
  return encodeURIComponent(S.slice(0, length));

  /* 正则表达式 */
  // return S.slice(0, length).replace(/\s/g, '%20');
};