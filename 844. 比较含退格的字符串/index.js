/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  /* 栈 */
  // return processed(S) === processed(T);

  /* 双指针 */
  let sIdx = S.length - 1, tIdx = T.length - 1, deleteLen = 0;

  while (sIdx >= 0 || tIdx >= 0) {
    while (S.charAt(sIdx) === '#' || --deleteLen >= 0) {
      S.charAt(sIdx) === '#' && ++deleteLen;
      --sIdx;
    }
    ++deleteLen;
    while (T.charAt(tIdx) === '#' || --deleteLen >= 0) {
      T.charAt(tIdx) === '#' && ++deleteLen;
      --tIdx;
    }
    ++deleteLen;
    if (S.charAt(sIdx) !== T.charAt(tIdx)) return false;
    --sIdx, --tIdx;
  }

  return true;
};

const processed = (str) => {
  const stackStr = [];

  for (const c of str) {
    if (c === '#') {
      stackStr.pop();
    } else {
      stackStr.push(c);
    }
  }

  return stackStr.join('');
}