/**
 * @param {number[]} prices
 * @return {number}
 */

// DP Recursive
var maxProfit = function (k, prices) {
  const dp = new Map();
  const calculateProfit = (index, canBuy, limit) => {
    if (index == prices.length || limit == 0) return 0;

    const cacheKey = " " + index + " " + canBuy + " " + limit;
    console.log(cacheKey);
    if (dp.has(cacheKey)) return dp.get(cacheKey);

    if (canBuy) {
      const res = Math.max(
        -prices[index] + calculateProfit(index + 1, 0,limit),
        0 + calculateProfit(index + 1, 1, limit)
      );
      dp.set(cacheKey, res);
      return res;
    } else {
      const res = Math.max(
        prices[index] + calculateProfit(index + 1, 1, limit -1),
        0 + calculateProfit(index + 1, 0,limit)
      );
      dp.set(cacheKey, res);
      return res;
    }
  };
  return calculateProfit(0, 1, k);
};
const k = 11,
  prices = [48,12,60,93,97,42,25,64,17,56,85,93,9,48,52,42,58,85,81,84,69,36,1,54,23,15,72,15,11,94]

console.log(maxProfit(k, prices));
