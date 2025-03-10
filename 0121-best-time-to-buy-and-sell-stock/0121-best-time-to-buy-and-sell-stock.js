/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = Infinity
    let max = -Infinity
    let max_profit = 0
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(prices[i], min)
        let amount = prices[i] - min
        max_profit = Math.max(max_profit, amount)
    }
    return max_profit
};