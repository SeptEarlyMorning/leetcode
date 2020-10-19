# 844. 比较含退格的字符串

## 题目

给定 `S` 和 `T` 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 `#` 代表退格字符。

**注意：** 如果对空文本输入退格字符，文本继续为空。

 

**示例 1：**
```
输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。
```
**示例 2：**
```
输入：S = "ab##", T = "c#d#"
输出：true
解释：S 和 T 都会变成 “”。
```
**示例 3：**
```
输入：S = "a##c", T = "#a#c"
输出：true
解释：S 和 T 都会变成 “c”。
```
**示例 4：**
```
输入：S = "a#c", T = "b"
输出：false
解释：S 会变成 “c”，但 T 仍然是 “b”。
```

**提示：**

1. `1 <= S.length <= 200`
2. `1 <= T.length <= 200`
3. `S` 和 `T` 只含有小写字母以及字符 `'#'`。

**进阶：**

- 你可以用 `O(N)` 的时间复杂度和 `O(1)` 的空间复杂度解决该问题吗？ 

## 解法

### 方法一：栈

#### 思路

这个方法可以很容易的想到，将两个字符串均处理成没有退格符的字符串，再进行比较，即可。

在处理的过程中，可以借助 **栈** 这个数据结构来完成转换。顺序的遍历字符串，当字符串等于 `#` 时，将栈顶的字符串弹出；反之，将字符串压入栈中，即可。

#### 代码

```javascript []
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  /* 栈 */
  return processed(S) === processed(T);
};

const processed = (str) => {
  const stackStr = [];

  for (const c of str) {
    if (c === '#') {
      stackStr.pop();
    } else {
      stackStr.push(c);
    }
  }

  return stackStr.join('');
}
```
```go []
func backspaceCompare(S string, T string) bool {
  /* 栈 */
  return processed(S) == processed(T)
}

func processed(str string) string {
  stackStr := []rune{}

  for _, c := range str {
    if c != '#' {
      stackStr = append(stackStr, c)
    } else if len(stackStr) > 0 {
      stackStr = stackStr[:len(stackStr)-1]
    }
  }

  return string(stackStr)
}
```

### 方法二：双指针

#### 思路

因为退格符不会对后面的字符造成影响，所有可以试着想一下逆序的遍历。

遍历时，当遇到 `#` 记录下连续的 `#` 的数量 `deleteLen`。直到不再是 `#`，在向前遍历 `deleteLen` 次，当又遇到 `#` 时，`deleteLen` 加一，直到 `deleteLen === 0`。

将两个字符串依次按照上面的方法遍历得到下标。得到的下标的字符如果不等，则说明 **不等**；最后当其中一个字符串已经遍历完了，另一个依旧没遍历完，则也可说明 **不等**。当上面两种情况都没遇到时即相等了。

#### 代码

```javascript []
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  /* 双指针 */
  let sIdx = S.length - 1, tIdx = T.length - 1, deleteLen = 0;

  while (sIdx >= 0 || tIdx >= 0) {
    while (S.charAt(sIdx) === '#' || --deleteLen >= 0) { // js 不需要考虑越界
      S.charAt(sIdx) === '#' && ++deleteLen;
      --sIdx;
    }
    ++deleteLen;
    while (T.charAt(tIdx) === '#' || --deleteLen >= 0) {
      T.charAt(tIdx) === '#' && ++deleteLen;
      --tIdx;
    }
    ++deleteLen;
    if (S.charAt(sIdx) !== T.charAt(tIdx)) return false;
    --sIdx, --tIdx;
  }

  return true;
};
```
```go []
func backspaceCompare(S string, T string) bool {
  /* 双指针 */
  for sIdx, tIdx, deleteLen := len(S)-1, len(T)-1, 0; sIdx >= 0 || tIdx >= 0; {
    for sIdx >= 0 && (S[sIdx] == '#' || deleteLen > 0) {
      if S[sIdx] == '#' {
        deleteLen++
      } else {
        deleteLen--
      }
      sIdx--
    }
    for tIdx >= 0 && (T[tIdx] == '#' || deleteLen > 0) {
      if T[tIdx] == '#' {
        deleteLen++
      } else {
        deleteLen--
      }
      tIdx--
    }
    if sIdx >= 0 && tIdx >= 0 {
      if S[sIdx] != T[tIdx] {
        return false
      }
    } else if sIdx >= 0 || tIdx >= 0 {
      return false
    }
    sIdx--
    tIdx--
  }

  return true
}
```
