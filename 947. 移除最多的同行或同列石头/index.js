/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  /* 并查集 */
  const uf = new UF();

  for (const [stoneX, stoneY] of stones) {
    uf.union(stoneX, stoneY + 10000);
  }

  return stones.length - uf.count;
};

class UF {
  parent = {};
  count = 0;

  union(x, y) {
    const rootX = this.find(x), rootY = this.find(y);
    if (rootX === rootY) return;
    --this.count;
    this.parent[rootX] = rootY;
  }

  find(x) {
    if (this.parent[x] === undefined) {
      ++this.count;
      this.parent[x] = x;
    }
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
}