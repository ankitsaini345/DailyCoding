/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let [row, col] = [grid.length, grid[0].length];
  let ans = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 2) dfs(i, j, 0);
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) return -1;
      if (grid[i][j] > 10) {
        ans = Math.max(ans, grid[i][j] - 10);
      }
    }
  }

  function isInValid(i, j, time) {
    return (
      i < 0 ||
      i >= row ||
      j < 0 ||
      j >= col ||
      grid[i][j] === 0 ||
      (grid[i][j] === 2 && time != 0)
    );
  }

  function dfs(i, j, time) {
    if (isInValid(i, j, time)) return;

    if (grid[i][j] > 10) {
      if (grid[i][j] - 10 > time) grid[i][j] = 10 + time;
      else return;
    }

    if (grid[i][j] === 1) grid[i][j] = 10 + time;

    dfs(i + 1, j, time + 1);
    dfs(i - 1, j, time + 1);
    dfs(i, j + 1, time + 1);
    dfs(i, j - 1, time + 1);
  }
  return ans;
};

const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
console.log(orangesRotting(grid));
