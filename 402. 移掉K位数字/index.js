/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  /* 暴力法 */
  // for (let i = 0; i < k; ++i) {
  //   let max = -Infinity, j = 0;
  //   while (j < num.length && num[j] >= max) {
  //     max = num[j];
  //     ++j;
  //   }
  //   num = num.replace(num[j - 1], '');
  // }

  // let i = 0;
  // while (i < num.length && num[i] === '0') {
  //   ++i;
  // }

  // return num.slice(i) || '0';

  /* 单调栈 */
  const stack = [];

  for (const n of num) {
    while (k && stack.length && n < stack[stack.length - 1]) {
      stack.pop();
      --k;
    }
    stack.push(n);
  }

  stack.splice(stack.length - k, k);

  return stack.join('').replace(/^0+/, '') || '0';
};