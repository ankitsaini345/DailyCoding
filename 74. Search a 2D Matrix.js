/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var bSearch = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const index = Math.floor((l + r) / 2);
    if (nums[index] === target) return true;
    if (nums[index] < target) l = index + 1;
    else r = index - 1;
  }
  return false;
};

var searchMatrix = function (matrix, target) {
  let m = matrix.length - 1;
  let n = matrix[0].length - 1;
  let l = 0;
  let r = m;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (matrix[mid][0] > target) r = mid - 1;
    else if (matrix[mid][n] < target) l = mid + 1;
    else return bSearch(matrix[mid], target);
  }
  return false;
};

const matrix = [[1], [3]],
  target = 0;

// const matrix = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 60],
//   ],
//   target = 3;
// const matrix = [
//     [-10, -8],
//     [-6, -5],
//     [-2, -2],
//     [-1, 0],
//     [3, 4],
//     [7, 7],
//     [8, 9],
//     [10, 10],
//     [11, 11],
//     [12, 14],
//     [15, 16],
//     [17, 19],
//     [20, 21],
//     [22, 22],
//     [25, 27],
//     [28, 30],
//     [32, 32],
//     [35, 36],
//   ],
//   target = 16;

console.log(searchMatrix(matrix, target));
