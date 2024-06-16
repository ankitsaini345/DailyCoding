/**
 * @param {number[]} prices
 * @return {number}
 */

// DP Recursive
var maxProfit = function (prices) {
  const dp = new Map();
  const calculateProfit = (index, canBuy, limit) => {
    if (index == prices.length) return 0;
    if (limit == 0) return 0;

    const cacheKey = "" + index + canBuy + limit;
    if (dp.has(cacheKey)) return dp.get(cacheKey);

    if (canBuy) {
      const res = Math.max(
        -prices[index] + calculateProfit(index + 1, 0, limit),
        0 + calculateProfit(index + 1, 1, limit)
      );
      dp.set(cacheKey, res);
      return res;
    } else {
      const res = Math.max(
        prices[index] + calculateProfit(index + 1, 1, limit - 1),
        0 + calculateProfit(index + 1, 0, limit)
      );
      dp.set(cacheKey, res);
      return res;
    }
  };
  return calculateProfit(0, 1, 2);
};

const prices = [3, 3, 5, 0, 0, 3, 1, 4];

console.log(maxProfit(prices));
