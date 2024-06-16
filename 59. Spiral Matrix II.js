/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const answer = new Array(n).fill().map((e) => new Array(n));

  let [top, left, bottom, right] = [0, 0, n - 1, n - 1];
  let num = 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      answer[top][i] = num++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      answer[i][right] = num++;
    }
    right--;

    for (let i = right; i >= left && top <= bottom; i--) {
      answer[bottom][i] = num++;
    }
    bottom--;

    for (let i = bottom; i >= top && left <= right; i--) {
      answer[i][left] = num++;
    }
    left++;
  }
  return answer;
};

console.log(generateMatrix(3));
