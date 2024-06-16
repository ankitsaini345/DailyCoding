/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */
class Solution {
  mcm(i, j, arr, dp) {
    if (i >= j) return 0;
    if(dp[i][j] != -1) return dp[i][j];

    let tempRes = Number.MAX_SAFE_INTEGER;
    for (let k = i; k <= j - 1; k++) {
      const ans =
        this.mcm(i, k, arr, dp) +
        this.mcm(k + 1, j, arr, dp) +
        arr[i - 1] * arr[k] * arr[j];
      tempRes = dp[i][j] = Math.min(tempRes, ans);
    }
    return tempRes;
  }
  matrixMultiplication(arr, n) {
    const dp = new Array(n).fill().map(e => new Array(n).fill(-1));
    const ans =  this.mcm(1, n - 1, arr,dp);
    return ans
  }
}

const n = 7,
  arr = [40, 20, 30, 10, 30, 60,70];

const sol = new Solution();

console.log(sol.matrixMultiplication(arr, n));
