/**
 * @param {number} n
 * @return {number}
 */

// 递归
var trailingZeroes = function (n) {
    if (n < 5) {
        return 0;
    }
    return trailingZeroes(Math.floor(n / 5)) + Math.floor(n / 5);
};

// 迭代
var trailingZeroes = function (n) {
    let num = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        num += n;
    }
    return num;
};