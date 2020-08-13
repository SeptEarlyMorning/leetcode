/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  const len1 = num1.length, len2 = num2.length, resArr = new Array(len1 + len2).fill(0);
  let i = len1;

  while (i--) {
    const multiplicand = +num1[i];
    let j = len2;
    while (j--) {
      const multiplier = +num2[j];
      const product = multiplicand * multiplier;
      const sum = resArr[i + j + 1] + product;

      resArr[i + j + 1] = sum % 10;
      resArr[i + j] += sum / 10 | 0;
    }
  }

  while (resArr[0] == 0) {
    resArr.shift();
  }

  return resArr.join('');
};