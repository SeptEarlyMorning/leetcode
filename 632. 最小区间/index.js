/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  /* 哈希表 */
  const len = nums.length, map = new Map();
  let min = -Infinity, max = Infinity, bool = true;

  while (bool) {
    let value = Infinity, keys = -1;
    for (let i = 0; i < nums.length; i++) {
      if (!nums.length) {
        continue;
      }
      if (nums[i][0] < value) {
        value = nums[i][0];
        keys = [i];
      } else if (nums[i][0] === value) {
        keys.push(i);
      }
    }
    for (const key of keys) {
      map.set(key, nums[key].shift());
    }
    if (map.size === len) {
      const minNum = Math.min(...map.values());
      if (value - minNum < max - min) {
        max = value;
        min = minNum;
      }
      for (const keyItem of map.keys()) {
        if (minNum === map.get(keyItem)) {
          map.delete(keyItem);
          if (!nums[keyItem].length) {
            bool = false;
          }
        }
      }
    }
  }

  return [min, max];
};