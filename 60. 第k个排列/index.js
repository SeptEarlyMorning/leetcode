const getPermutation = (n, k) => {
  let count = 0;
  const used = new Set();

  const helper = (temp) => {
    if (temp.length == n) {   // 选齐了 生成了一个排列
      count++;
      if (count == k) {       // 正好是第k个
        return temp.join(''); // 拼成字符串，返回出来
      }
      return;                 // 结束当前递归，考察别的选择
    }
    for (let i = 1; i <= n; i++) { // 枚举出所有选择
      if (used.has(i)) continue;   // 已经选过，跳过
      temp.push(i);                // 选择
      used.add(i);
      const res = helper(temp);    // 递归 往下选，获取返回值
      temp.pop();                  // 撤销选择
      used.delete(i);
      if (res) {                   // 有返回值，说明找到了，返回res，结束掉遍历
        return res;
      }
    }
  };

  return helper([]);
};