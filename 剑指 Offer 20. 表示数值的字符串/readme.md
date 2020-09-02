# 剑指 Offer 20. 表示数值的字符串

## 题目

请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"都表示数值，但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。

## 思路

之前刷题目是遇到过 **有限状态机** 当时没咋注意就没看，结果又刷到了，然后专门去看了一下，还是不难理解的。不了解的可以去看一下这个 [视频](https://www.bilibili.com/video/BV12t411v7hc?from=search&seid=532509999627697567)。
只要找到了每个状态、字符类型及状态之间的转移方法，就可以了。

## 代码
```javascript []
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  /* 有限状态自动机 */
  const STATE = { // 状态枚举
    START_SPACE: Symbol(),
    INT_SIGN: Symbol(),
    INT: Symbol(),
    INT_POINT: Symbol(),
    NO_INT_POINT: Symbol(),
    DECIMAL: Symbol(),
    EXP_LETTER: Symbol(),
    EXP_SIGN: Symbol(),
    EXP_INT: Symbol(),
    END_SPACE: Symbol(),
  }

  const CHAR_TYPE = { // 输入字符类型
    SPACE: Symbol(),
    EXP: Symbol(),
    NUMBER: Symbol(),
    POINT: Symbol(),
    SIGN: Symbol(),
    ILLEGAL: Symbol(),
  }

  const isCharType = (c) => { // 判断字符类型
    switch (c) {
      case '0': ; case '1': ; case '2': ; case '3': ; case '4': ; case '5': ; case '6': ; case '7': ; case '8': ; case '9': return CHAR_TYPE.NUMBER;
      case ' ': return CHAR_TYPE.SPACE;
      case 'e': ; case 'E': return CHAR_TYPE.EXP;
      case '.': return CHAR_TYPE.POINT;
      case '+': ; case '-': return CHAR_TYPE.SIGN;
      default: return CHAR_TYPE.ILLEGAL;
    }
  };

  const stateTransition = { // 状态转移
    [STATE.START_SPACE]: {
      [CHAR_TYPE.SPACE]: STATE.START_SPACE,
      [CHAR_TYPE.SIGN]: STATE.INT_SIGN,
      [CHAR_TYPE.NUMBER]: STATE.INT,
      [CHAR_TYPE.POINT]: STATE.NO_INT_POINT,
    }, [STATE.INT_SIGN]: {
      [CHAR_TYPE.NUMBER]: STATE.INT,
      [CHAR_TYPE.POINT]: STATE.NO_INT_POINT,
    }, [STATE.INT]: {
      [CHAR_TYPE.NUMBER]: STATE.INT,
      [CHAR_TYPE.POINT]: STATE.INT_POINT,
      [CHAR_TYPE.EXP]: STATE.EXP_LETTER,
      [CHAR_TYPE.SPACE]: STATE.END_SPACE,
    }, [STATE.INT_POINT]: {
      [CHAR_TYPE.NUMBER]: STATE.DECIMAL,
      [CHAR_TYPE.EXP]: STATE.EXP_LETTER,
      [CHAR_TYPE.SPACE]: STATE.END_SPACE,
    }, [STATE.NO_INT_POINT]: {
      [CHAR_TYPE.NUMBER]: STATE.DECIMAL,
    }, [STATE.DECIMAL]: {
      [CHAR_TYPE.NUMBER]: STATE.DECIMAL,
      [CHAR_TYPE.EXP]: STATE.EXP_LETTER,
      [CHAR_TYPE.SPACE]: STATE.END_SPACE,
    }, [STATE.EXP_LETTER]: {
      [CHAR_TYPE.SIGN]: STATE.EXP_SIGN,
      [CHAR_TYPE.NUMBER]: STATE.EXP_INT,
    }, [STATE.EXP_SIGN]: {
      [CHAR_TYPE.NUMBER]: STATE.EXP_INT,
    }, [STATE.EXP_INT]: {
      [CHAR_TYPE.NUMBER]: STATE.EXP_INT,
      [CHAR_TYPE.SPACE]: STATE.END_SPACE,
    }, [STATE.END_SPACE]: {
      [CHAR_TYPE.SPACE]: STATE.END_SPACE,
    },
  };

  let curState = STATE.START_SPACE;

  for (const c of s) {
    const charType = isCharType(c);
    curState = stateTransition[curState][charType];
    if (!curState) return false;
  }

  return curState === STATE.INT
    || curState === STATE.INT_POINT
    || curState === STATE.DECIMAL
    || curState === STATE.EXP_INT
    || curState === STATE.END_SPACE;
};
```