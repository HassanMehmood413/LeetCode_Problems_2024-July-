/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = prices[0]
    let i = 0
    let profit = 0
    while (i < prices.length) {
        if (prices[i] < max) {
            max = prices[i]
        }
        let diff = prices[i] - max
        if (diff > profit) {
            profit = diff
        }
        i++
    }
    return profit
};