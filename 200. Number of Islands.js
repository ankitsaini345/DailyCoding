/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid.length) return 0;

  let [row, col] = [grid.length, grid[0].length];
  let islands = 0;
  const stack = [];

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      bfs(r, c);
    }
  }

  function isValid(r, c) {
    return (
      r >= 0 &&
      r < row &&
      c >= 0 &&
      c < col &&
      grid[r][c] === "1"
    );
  }

  function bfs(r, c) {
    if (isValid(r, c)) {
      stack.push([r, c]);
      islands++;
    }
    while (stack.length) {
      const [r, c] = stack.pop();
      grid[r][c] = "0"
      if (isValid(r + 1, c)) stack.push([r + 1, c]);
      if (isValid(r, c + 1)) stack.push([r, c + 1]);
      if (isValid(r - 1, c)) stack.push([r - 1, c]);
      if (isValid(r, c - 1)) stack.push([r, c - 1]);
    }
  }
  return islands;
};

// const grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
//   ];
const grid = [
  ["0", "1", "0"],
  ["1", "0", "1"],
  ["0", "1", "0"],
];

console.log(numIslands(grid));
