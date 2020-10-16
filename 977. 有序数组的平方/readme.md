# 977. 有序数组的平方

## 题目

给定一个按非递减顺序排序的整数数组 `A`，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

 

**示例 1：**
```
输入：[-4,-1,0,3,10]
输出：[0,1,9,16,100]
```
**示例 2：**
```
输入：[-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

**提示：**

1. `1 <= A.length <= 10000`
2. `-10000 <= A[i] <= 10000`
3. `A` 已按非递减顺序排序。 

## 思路

### 从中间开始的双指针

题目中给出的数组是已经递增有序的了，可以利用这一特点，找到数组中最接近 **0** 的负数和非负数，然后迭代的比较这两个数字的平方后的大小，将较小的那个 `push` 到新的数组中。

#### 代码
``` javascript
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  /* 中间开始的双指针 */
  const resArr = [], len = A.length;
  let left = 0, right = len;

  while (left < right) { // 找到中间的数
    const mid = left + ((right - left) >> 1);

    if (A[mid] < 0) {
      left = mid + 1;
    } else if (A[mid] > 0) {
      right = mid;
    } else {
      left = right = mid
      break;
    }
  }
  --left;
  while (left >= 0 || right < len) {
    if (right >= len || (left >= 0 && -A[left] < A[right])) {
      resArr.push(A[left] ** 2);
      --left;
    } else {
      resArr.push(A[right] ** 2);
      ++right;
    }
  }

  return resArr;
};
```
``` go
func sortedSquares(A []int) []int {
  /* 从中间开始的双指针 */
  l := len(A)
  left, right := 0, l
  resArr := make([]int, l)

  for left < right {
    mid := left + ((right - left) >> 1)

    if A[mid] < 0 {
      left++
    } else if A[mid] > 0 {
      right--
    } else {
      left, right = mid, mid
      break
    }
  }
  left--
  for left >= 0 || right < l {
    if right >= l || (left >= 0 && -A[left] < A[right]) {
      resArr[right - left - 1] = A[left] * A[left]
      left--
    } else {
      resArr[right - left - 1] = A[right] * A[right]
      right++
    }
  }
  
  return resArr
}
```

### 从两端开始的双指针

上一个解法是从 **最小** 的数字开始添加到新的数组中去，需要找到中间靠近 **0** 的数字，我们可以换个思维从 **最大** 的数字开始添加到新的数组中去。

#### 代码
```javascript []
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  /* 两端开始的双指针 */
  const len = A.length, resArr = new Array(len);
  let left = 0, right = len - 1;

  while (left <= right) {
    if (A[left] < 0 && -A[left] > A[right]) {
      resArr[right - left] = A[left++] ** 2;
    } else {
      resArr[right - left] = A[right--] ** 2;
    }
  }

  return resArr;
};
```
```go []
func sortedSquares(A []int) []int {
  /* 从两端开始的双指针 */
  l := len(A)
  resArr := make([]int, l)
  
  for left, right := 0, l - 1; left <= right; {
    if A[left] < 0 && -A[left] > A[right] {
      resArr[right - left] = A[left] * A[left]
      left++
    } else {
      resArr[right - left] = A[right] * A[right]
      right--
    }
  }

  return resArr
}
```

