# 51. N 皇后

## 题目

n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

![8-queens](./img/8-queens.png)

上图为 8 皇后问题的一种解法。

给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 `'Q'` 和 `'.'` 分别代表了皇后和空位。



**示例：**
```
输入：4
输出：[
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。
```

**提示：**

- 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。

## 思路



一个非常典型的回溯问题。

第一个版本的代码写出来的时候，发现非常的慢，以为自己的剪枝没做好，但是无论怎么检查都没发现问题。最后看了一下官方的代码，恍然大悟，原来在判断能否放入皇后时的代码，我用了暴力法，如下： 



``` javascript
const isOk = (i, j, res) => {
 let leftY = j, rightY = j;

 for (let x = i - 1; x >= 0; --x) {
  if (res[x][j] === 'Q') return false;
  if (--leftY >= 0 && res[x][leftY] === 'Q') return false;
  if (++rightY < n && res[x][rightY] === 'Q') return false;
 }

 return true;
};
```

这是一个非常不明智的选择。完全可以利用记忆化来记录不能放皇后的位置，于是我该用了三个数组来分别存放向左、向右及向下的不能放皇后的位置。下面是完整代码：



## 代码



```javascript []
/**
 \* @param {number} n
 \* @return {string[][]}
 */

var solveNQueens = function (n) {
 const resArr = [];

 const backtracking = (i, j, res, leftDp, rightDp, dp) => {
  if (i >= n) {
   resArr.push(res);
   return;
  }
  if (j >= n) return;
  if (leftDp[j] && rightDp[j] && dp[j]) {
   let s = '';
   for (let k = 0; k < n; ++k) {
​    if (k === j) {
​     s += 'Q';
​    } else {
​     s += '.';
​    }
   }
   const curLeftDp = [...leftDp], curRightDp = [...rightDp], curDp = [...dp];
   curLeftDp[j] = false, curRightDp[j] = false, curDp[j] = false;
   curLeftDp.shift();
   curLeftDp.push(true)
   curRightDp.pop();
   curRightDp.unshift(true)
   backtracking(i + 1, 0, [...res, s], curLeftDp, curRightDp, curDp);
  }
  backtracking(i, j + 1, [...res], leftDp, rightDp, dp);
 };

 backtracking(0, 0, [], new Array(n).fill(true), new Array(n).fill(true), new Array(n).fill(true));

 return resArr;
};
```

## 效率截图

![image.png](./img/1599132260-UDpFTk-image.png)

**最后有啥不足，希望指出，嘻嘻(#^.^#)**