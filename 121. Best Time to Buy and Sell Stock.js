/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxP = 0, left = 0;
    for (let i = 1; i < prices.length; i++) {
        if(prices[left] >= prices[i]){
            left = i;
        } else {
            maxP = Math.max(maxP, (prices[i] - prices[left]))
        }
    }
    return maxP
};