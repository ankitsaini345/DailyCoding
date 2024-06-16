/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const answer = [];
  let [row, col] = [matrix.length, matrix[0].length];
  let [top, left, bottom, right] = [0, 0, row - 1, col - 1];

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      answer.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      answer.push(matrix[i][right]);
    }
    right--;

    for (let i = right; i >= left && top<= bottom; i--) {
      answer.push(matrix[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top && left <= right; i--) {
      answer.push(matrix[i][left]);
    }
    left++;
  }
  return answer;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(spiralOrder(matrix));
