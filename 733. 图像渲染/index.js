/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  /* dfs */
  // const col = image[sr][sc];
  // const dfs = (i, j) => {
  //   if (i < 0 || i >= image.length || j < 0 || j >= image[i].length || image[i][j] === newColor) return;
  //   if (image[i][j] === col) {
  //     image[i][j] = newColor;
  //     dfs(i + 1, j);
  //     dfs(i - 1, j);
  //     dfs(i, j + 1);
  //     dfs(i, j - 1);
  //   }
  // };
  // dfs(sr, sc);

  // return image;

  /* bfs */
  const que = [{ x: sc, y: sr }], col = image[sr][sc];

  while (que.length) {
    const { x, y } = que.shift();
    if (y < 0 || y >= image.length || x < 0 || x >= image[y].length || image[y][x] === newColor) continue;
    if (image[y][x] === col) {
      image[y][x] = newColor;
      que.push({ x: x + 1, y });
      que.push({ x: x - 1, y });
      que.push({ x, y: y + 1 });
      que.push({ x, y: y - 1 });
    }
  }

  return image;
};