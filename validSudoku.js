/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rowSet = new Set();
  let colSet = new Set();
  //checking row wise
  for (let i = 0; i < 9; i++) {
    rowSet.clear();
    colSet.clear();
    for (let j = 0; j < 9; j++) {
      if (rowSet.has(board[i][j])) 
        return false;
      if (board[i][j] !== ".") rowSet.add(board[i][j]);

      if (colSet.has(board[j][i])) 
        return false;
      if (board[j][i] !== ".") colSet.add(board[j][i]);
    }
  }

  //check blocks
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      if (isValidBlock(board, i, i + 2, j, j + 2) === false) return false;
    }
  }

  return true;
};

const isValidBlock = function (board, rowStart, rowEnd, colStart, colEnd) {
  let set = new Set();
  for (let i = rowStart; i <= rowEnd; i++) {
    for (let j = colStart; j <= colEnd; j++) {
      if (set.has(board[i][j])) return false;
      if (board[i][j] !== ".") set.add(board[i][j]);
    }
  }
  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
