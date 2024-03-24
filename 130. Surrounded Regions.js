/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let [row, col] = [board.length, board[0].length];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (
        (i == 0 || j == 0 || i == row - 1 || j == col - 1) &&
        board[i][j] === "O"
      )
        dfs(i, j);
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === "V") board[i][j] = "O";
    }
  }

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= row || j >= col || board[i][j] != "O") return;

    board[i][j] = "V";
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }
  return board;
};

const board1 = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];
const board = [
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];
const board2 = [
  ["X", "O", "X", "O", "X", "O"],
  ["O", "X", "O", "X", "O", "X"],
  ["X", "O", "X", "O", "X", "O"],
  ["O", "X", "O", "X", "O", "X"],
];

console.log(solve(board));
