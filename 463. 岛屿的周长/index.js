/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  /* 迭代 */
  let perimeter = 0, adjacentAreas = [{ x: 0, y: 1 }, { x: 0, y: -1 }, { x: 1, y: 0 }, { x: -1, y: 0 }];

  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      if (grid[i][j] === 1) {
        for (const adjacentArea of adjacentAreas) {
          let { x, y } = adjacentArea;
          x += i, y += j;
          if (x < 0 || x >= grid.length || y < 0 || y >= grid[i].length || grid[x][y] === 0) ++perimeter;
        }
      }
    }
  }

  return perimeter;
};