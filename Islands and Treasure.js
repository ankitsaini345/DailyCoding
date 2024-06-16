function islandsAndTreasure(grid) {
  let [row, col] = [grid.length, grid[0].length];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 0) 
      dfs(i, j, 0);
    }
  }

  function isInValid(i, j, dist) {
    return (
      i < 0 ||
      i >= row ||
      j < 0 ||
      j >= col ||
      grid[i][j] === -1 ||
      (grid[i][j] === 0 && dist != 0)
    );
  }

  function dfs(i, j, dist) {
    if (isInValid(i, j, dist)) return;

    if (grid[i][j] != 0 && grid[i][j] <= dist) return;
    grid[i][j] = dist;

    dfs(i + 1, j, dist + 1);
    dfs(i - 1, j, dist + 1);
    dfs(i, j + 1, dist + 1);
    dfs(i, j - 1, dist + 1);
  }
  return grid;
}

const grid = [
    [2147483647,-1,0,2147483647],
    [2147483647,2147483647,2147483647,-1],
    [2147483647,-1,2147483647,-1],
    [0,-1,2147483647,2147483647]
  ]

console.log(islandsAndTreasure(grid));