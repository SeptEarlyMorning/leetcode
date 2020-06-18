// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
  const roots = [];
  const depths = [];
  let m = 0;
  while (m < S.length) {
    let depth = 0;
    while (S[m] === '-') {
      depth++;
      m++;
    }
    depths.push(depth);
    let val = 0;
    while (m < S.length && S[m] !== '-') {
      val = val * 10 + (+S[m]);
      m++;
    }
    roots.push(new TreeNode(val));
  }
  for (let i = 1; i < depths.length; i++) {
    let j = i - 1;
    let isLeft = true;
    while (depths[j] !== depths[i] - 1) {
      if (depths[j] === depths[i]) isLeft = false;
      j--;
    }
    if (isLeft) {
      roots[j].left = roots[i];
    } else {
      roots[j].right = roots[i];
    }
  }
  return roots[0];
};

// console.log(recoverFromPreorder("1-2--3--4-5--6--7"));
