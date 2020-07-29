/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  /* 栈 + 哈希表 */
  const stack = [];
  const mapBrackets = new Map([['(', ')'], ['{', '}'], ['[', ']']]);

  for (let i = 0; i < s.length; i++) {
    const charI = s.charAt(i);
    if (mapBrackets.has(charI)) {
      stack.push(charI);
    } else {
      const key = stack.pop();
      if (mapBrackets.get(key) !== charI && key !== ' ') {
        return false;
      }
    }
  }

  return stack.length === 0;
};