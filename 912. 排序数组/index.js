/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (arr) {
  // bubbleSort(arr, 0, arr.length);
  // mergeSort(arr, 0, arr.length);
  selectSort(arr, 0, arr.length);
  console.log(arr);

  return arr;
};

// 交换数组中的两个数据
const swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

// 冒泡排序
const bubbleSort = (arr, lo, hi) => {
  while (lo < (hi = bubble(arr, lo, hi)));
};

const bubble = (arr, lo, hi) => {
  let last = lo;
  while (++lo < hi) {
    if (arr[lo - 1] > arr[lo]) {
      last = lo;
      swap(arr, lo - 1, lo);
    }
  }
  return last;
};

// 归并排序
const mergeSort = (arr, lo, hi) => {
  if (hi - lo < 2) {
    return;
  }
  let mi = (lo + hi) >> 1;
  mergeSort(arr, lo, mi);
  mergeSort(arr, mi, hi);
  merge(arr, lo, mi, hi);
};

const merge = (arr, lo, mi, hi) => {
  let arr1 = [];
  let loNum = lo, miNum = mi;
  while (lo < miNum && mi < hi) {
    arr[lo] < arr[mi] ? arr1.push(arr[lo++]) : arr1.push(arr[mi++]);
  }
  arr1 = arr1.concat(lo === miNum ? arr.slice(mi, hi) : arr.slice(lo, miNum));
  arr.splice(loNum, hi - loNum, ...arr1);
};

// 选择排序
const selectSort = (arr, lo, hi) => {

};

sortArray([3, 2, 1])
