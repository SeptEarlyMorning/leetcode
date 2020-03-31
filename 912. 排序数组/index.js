/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(arr) {
  return quickSort(arr)
};
//quicksort
function quickSort(arr, left = 0, right = arr.length - 1) {
if (left < right) {
  let pivot = ~~((right + left)>>1)
  let newPivot = partition(arr, pivot, left, right)
  quickSort(arr, left, newPivot - 1)
  quickSort(arr, newPivot + 1, right)
}
return arr
}
//partition
function partition(arr, pivot, left, right) {
let pivotValue = arr[pivot]
let newPivot = left
swap(arr, pivot, right)
for (let i = left; i < right; i++) {
  if (arr[i] < pivotValue) {
    swap(arr, i, newPivot)
    newPivot ++
  }
}
swap(arr, right, newPivot)
return newPivot
}
//swap
function swap(arr, i, j) {
[arr[i], arr[j]] = [arr[j], arr[i]]
}