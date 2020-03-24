/**
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function (stones) {
    stones.sort((a, b) => a - b);
    let len = stones.length;
    let min = len;
    for (let i = 0; i < len; i++) {
        let j = i + 1;
        while (j < len && stones[j] - stones[i] < len) {
            j++;
        }
        console.log(j, i);
        min = Math.min(min, len - j + i);
        if (j - i === len) {
            break;
        }
        if (stones[j - 1] - stones[i] + 1 === len - 1 && j - i === len - 1 && (stones[j] - stones[j - 1] > 2 || stones[1] - stones[0] > 2)) {
            min = 2;
            break;
        }
    }
    return [min, Math.max(stones[len - 1] - stones[1] - len + 2, stones[len - 2] - stones[0] - len + 2)];
};