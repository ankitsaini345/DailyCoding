/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  const size = rows * cols;
  const answer = [[rStart, cStart]];
  let step = 1;
  while (answer.length < size) {
    //left to right
    for (let i = 0; i < step; i++) {
      cStart++;
      if (cStart < cols && cStart >= 0 && rStart < rows && rStart >= 0) {
        answer.push([rStart, cStart]);
      }
    }

    //top to bottom
    for (let i = 0; i < step; i++) {
      rStart++;
      if (cStart < cols && cStart >= 0 && rStart < rows && rStart >= 0) {
        answer.push([rStart, cStart]);
      }
    }
    step++;

    //right to left
    for (let i = 0; i < step; i++) {
      cStart--;
      if (cStart < cols && cStart >= 0 && rStart < rows && rStart >= 0) {
        answer.push([rStart, cStart]);
      }
    }

    //bottom to up
    for (let i = 0; i < step; i++) {
      rStart--;
      if (cStart < cols && cStart >= 0 && rStart < rows && rStart >= 0) {
        answer.push([rStart, cStart]);
      }
    }
    step++;
  }

  return answer;
};

const rows = 5,
  cols = 6,
  rStart = 1,
  cStart = 4;
console.log(spiralMatrixIII(rows, cols, rStart, cStart));
