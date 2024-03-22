/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  let [row, col] = [heights.length, heights[0].length];
  const pacificSet = new Set();
  const atlanticSet = new Set();

  for (let i = 0, j = 0; i < row; i++) {
    dfsP(i, j);
  }

  for (let i = 0, j = 0; j < col; j++) {
    dfsP(i, j);
  }

  function isValidP(i, j) {
    return i > 0 && j > 0 && i < row && j < col && !pacificSet.has("" + i +","+ j);
  }

  function dfsP(i, j) {
    pacificSet.add("" + i +","+ j);
    if (isValidP(i + 1, j) && heights[i][j] <= heights[i + 1][j])
      dfsP(i + 1, j);
    if (isValidP(i - 1, j) && heights[i][j] <= heights[i - 1][j])
      dfsP(i - 1, j);
    if (isValidP(i, j + 1) && heights[i][j] <= heights[i][j + 1])
      dfsP(i, j + 1);
    if (isValidP(i, j - 1) && heights[i][j] <= heights[i][j - 1])
      dfsP(i, j - 1);
  }

  for (let i = 0, j = col - 1; i < row; i++) {
    dfsA(i, j);
  }

  for (let i = row - 1, j = 0; j < col; j++) {
    dfsA(i, j);
  }

  function dfsA(i, j) {
    atlanticSet.add("" + i +","+ j);
    if (isValidA(i + 1, j) && heights[i][j] <= heights[i + 1][j])
      dfsA(i + 1, j);
    if (isValidA(i - 1, j) && heights[i][j] <= heights[i - 1][j])
      dfsA(i - 1, j);
    if (isValidA(i, j + 1) && heights[i][j] <= heights[i][j + 1])
      dfsA(i, j + 1);
    if (isValidA(i, j - 1) && heights[i][j] <= heights[i][j - 1])
      dfsA(i, j - 1);
  }
  function isValidA(i, j) {
    return (
      i < row - 1 &&
      j < col - 1 &&
      i >= 0 &&
      j >= 0 &&
      !atlanticSet.has("" + i +","+ j)
    );
  }
  const ans = [];
  for (const val of atlanticSet) {
    if (pacificSet.has(val)) ans.push(val.split(","));
  }
  return ans;
};

const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
console.log(pacificAtlantic(heights));
