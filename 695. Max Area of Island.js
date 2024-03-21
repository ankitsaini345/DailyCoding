/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let maxIslandArea = 0;
  const [row, col] = [grid.length, grid[0].length];
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      maxIslandArea = Math.max(maxIslandArea, dfs(r, c));
    }
  }

  function isValid(r, c) {
    return r >= 0 && r < row && c >= 0 && c < col && grid[r][c] === 1;
  }

  function dfs(r, c) {
    if (!isValid(r, c)) return 0;
    grid[r][c] = 0;
    return 1 + dfs(r + 1, c) + dfs(r, c + 1) + dfs(r - 1, c) + dfs(r, c - 1);
  }
  return maxIslandArea;
};

grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1],
];

console.log(maxAreaOfIsland(grid));
