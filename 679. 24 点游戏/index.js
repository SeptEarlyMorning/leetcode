/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function (nums) {
  const len = nums.length;

  if (len === 1) {
    return Math.abs(nums[0] - 24) < 0.00001;
  }

  for (let i = 0; i < len; ++i) {

    for (let j = i + 1; j < len; ++j) {
      const restNums = [...nums];
      const num2 = restNums.splice(j, 1)[0];
      const num1 = restNums.splice(i, 1)[0];
      const isValid = judgePoint24([...restNums, (num1 + num2)])
        || judgePoint24([...restNums, (num1 - num2)])
        || judgePoint24([...restNums, (num2 - num1)])
        || judgePoint24([...restNums, (num1 * num2)])
        || (num2 !== 0 && judgePoint24([...restNums, (num1 / num2)]))
        || (num1 !== 0 && judgePoint24([...restNums, (num2 / num1)]));

      if (isValid) return true;
    }
  }

  return false;
};