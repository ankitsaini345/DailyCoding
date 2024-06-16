/**
 * @param {number[]} prices
 * @return {number}
 */

// via Greedy
var maxProfit = function (prices) {
  let totalProfit = 0;
  let lastPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const currPrice = prices[i];
    let currProfit = currPrice - lastPrice;
    if (currProfit > 0) {
      totalProfit += currProfit;
    }
    lastPrice = currPrice;
  }
  return totalProfit;
};

// using DP via Recursion
const maxProfitDPRec = (prices) => {
  const dp = new Map();
  const calcProfit = (index, canBuy) => {
    if (index == prices.length) return 0;

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
        prices[index] + calcProfit(index + 1, 1),
        calcProfit(index + 1, 0)
      );
      dp.set(cacheKey, profit);
      return profit;
    }
  };
  return calcProfit(0, 1);
};

//DP via iteration
const maxProfitDPIter = (prices) => {
  let lastBuy = 0;
  let lastNotBuy = 0;
  let currBuy, currNotBuy;
  for (let index = prices.length - 1; index >= 0; index--) {
    currBuy = Math.max(-prices[index] + lastNotBuy, lastBuy);
    currNotBuy = Math.max(prices[index] + lastBuy, lastNotBuy);
    lastBuy = currBuy;
    lastNotBuy = currNotBuy;
  }
  return lastBuy;
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfitDPIter(prices));
