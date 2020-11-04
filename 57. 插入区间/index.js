/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const res = [];
  let [newStart, newEnd] = newInterval, key = false;

  for (const [start, end] of intervals) {
    if (newEnd < start) {
      if (!key) {
        res.push([newStart, newEnd]);
        key = true;
      }
      res.push([start, end]);
    } else if (newStart > end) {
      res.push([start, end]);
    } else {
      newStart = Math.min(start, newStart);
      newEnd = Math.max(end, newEnd);
    }
  }

  if (!key) {
    res.push([newStart, newEnd]);
  }

  return res;
};