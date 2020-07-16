# 785. 判断二分图

## 题目

给定一个无向图`graph`，当这个图为二分图时返回`true`。

如果我们能将一个图的节点集合分割成两个独立的子集A和B，并使图中的每一条边的两个节点一个来自A集合，一个来自B集合，我们就将这个图称为二分图。

`graph`将会以邻接表方式给出，`graph[i]`表示图中与节点i相连的所有节点。每个节点都是一个在`0`到`graph.length-1`之间的整数。这图中没有自环和平行边： `graph[i]` 中不存在i，并且`graph[i]`中没有重复的值。


**示例 1:**
```
输入: [[1,3], [0,2], [1,3], [0,2]]
输出: true
解释: 
无向图如下:
0----1
|    |
|    |
3----2
我们可以将节点分成两组: {0, 2} 和 {1, 3}。
```
**示例 2:**
```
输入: [[1,2,3], [0,2], [0,1,3], [0,2]]
输出: false
解释: 
无向图如下:
0----1
| \  |
|  \ |
3----2
我们不能将节点分割成两个独立的子集。
```
**注意:**

- graph 的长度范围为 [1, 100]。
- graph[i] 中的元素的范围为 [0, graph.length - 1]。
- graph[i] 不会包含 i 或者有重复的值。
- 图是无向的: 如果j 在 graph[i]里边, 那么 i 也会在 graph[j]里边。

## 题解

### 1. 二分图定义
简而言之，就是顶点集V可分割为两个互不相交的子集，并且图中每条边依附的两个顶点都分属于这两个互不相交的子集，两个子集内的顶点不相邻。（百度百科复制的，感觉还是挺好理解的）
#### 1.1 如何判断为二分图
无向图G为二分图的充分必要条件是，G至少有两个顶点，且其所有回路的长度均为偶数。所以就可以使用染色法来解决问题。
### 2. 染色法
一共有两种颜色，从其中一个点开始判断，将跟它相连的点染成和它不同的另一种颜色，如果最后相连的点有相同的颜色，则不是二分图。

#### 2.1 BFS 广度优先遍历
```javascript
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  /* bfs + 染色法 */
  const len = graph.length;
  const colors = new Array(len).fill(0); // 用于存储染色信息的数组，0 表示未染色，1 表示染成红色，2 表示染成绿色

  for (let i = 0; i < len; i++) {
    if (!colors[i]) { // 判断是否被染色，如已染色说明此处已被遍历过了，跳过
      let que = [i]; // 使用队列存储需要被染色的节点下标
      colors[i] = 1; // 初始化第一个的颜色为红色
      while (que.length) { // 通过队列的长度来判断是否结束循环
        const key = que.shift();
        const color = colors[key] === 1 ? 2 : 1; // 记录下该节点的下个节点应该为什么颜色
        for (const item of graph[key]) { // 遍历该节点所有与之相连的节点
          if (colors[item]) { // 如果该节点已被染色，则判断该颜色是否与记录下的颜色一样，不一样则 return false
            if (colors[item] !== color) return false;
          } else { // 如果未被染色，则将其染色，并将其添加进队列中
            colors[item] = color;
            que.push(item);
          }
        }
      }
    }
  }
  return true;
};
```
#### 2.2 DFS 深度优先遍历
```javascript
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  /* dfs + 染色法 */
  const colors = new Array(graph.length).fill(0); // 用于存储染色信息的数组，0 表示未染色，1 表示染成红色，2 表示染成绿色
  return colors.every((value, index) => value === 0 ? dfs(index, graph, colors, 1) : true); // 如果已经被染色就不必在递归了
};

const dfs = (i, graph, colors, color) => {
  if (colors[i]) { // 递归出口，如果已被染色，则判断是否与要被染色的颜色一致
    if (colors[i] !== color) return false; // 不一致 return false
    return true; // 一致 return true
  }
  colors[i] = color; // 未被染色，则将其染色
  return graph[i].every(value => dfs(value, graph, colors, color === 1 ? 2 : 1));
};
```