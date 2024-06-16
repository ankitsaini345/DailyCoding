/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    const dp = new Map();
    const calcProfit = (index, canBuy) => {
      if (index >= prices.length) return 0;
  
      const cacheKey = "" + index + canBuy;
      if (dp.has(cacheKey)) return dp.get(cacheKey);
  
      if (canBuy) {
        const profit = Math.max(
          -prices[index] + calcProfit(index + 1, 0),
          calcProfit(index + 1, 1)
        );
        dp.set(cacheKey, profit);
        return profit;
      } else {
        const profit = Math.max(
          prices[index] + calcProfit(index + 2, 1),
          calcProfit(index + 1, 0)
        );
        dp.set(cacheKey, profit);
        return profit;
      }
    };
    return calcProfit(0, 1);
  };