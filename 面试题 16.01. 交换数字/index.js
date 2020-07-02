/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var swapNumbers = function (numbers) {
  /* ES6 解构赋值 */
  // [numbers[0], numbers[1]] = [numbers[1], numbers[0]];
  // return numbers;

  /* 加减法 */
  // numbers[0] = numbers[1] - numbers[0];
  // numbers[1] = numbers[1] - numbers[0];
  // numbers[0] = numbers[0] + numbers[1];
  // return numbers;

  /* 数组翻转 */
  // return numbers.reverse();

  /* push, shift 方法 */
  // numbers.push(numbers.shift())
  // return numbers;

  /* 异或 */
  numbers[0] ^= numbers[1];
  numbers[1] ^= numbers[0];
  numbers[0] ^= numbers[1];
  return numbers;
};