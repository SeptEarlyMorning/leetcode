/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let s = new Set();
  for (var i in nums) {
    var curLenth = s.size;
    s.add(nums[i]);
    if (s.size == curLenth)
      return nums[i];
  }
};