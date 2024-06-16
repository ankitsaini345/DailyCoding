/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const len = cost.length;
  const dp = new Array(cost.length);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < len; i++) {
    let minCost = Math.min(dp[i - 2], dp[i - 1]);
    dp[i] = cost[i] + minCost;
  }

  return Math.min(dp[len - 1], dp[len - 2]);
};

const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

console.log(minCostClimbingStairs(cost));
