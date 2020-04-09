/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = []
  let dfs = (s, left, right)=>{
      if(left ==n &&right==n) return res.push(s)
      if(left < n) dfs(s+'(', left+1, right)
      if(right < left) dfs(s+')', left, right+1)
  }
  dfs('', 0, 0)
  return res
}