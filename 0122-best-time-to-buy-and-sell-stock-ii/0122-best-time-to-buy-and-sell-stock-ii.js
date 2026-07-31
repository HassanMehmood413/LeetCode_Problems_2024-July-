/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let i = 0
    let j = 1
    let max_profit = 0

    while (j <= prices.length - 1) {
        if (prices[i] < prices[j]) {
            let prof_add = prices[j] - prices[i]
            let new_profit = max_profit + prof_add
            max_profit = Math.max(max_profit, new_profit)
        }
        i++
        j++
    }
    return max_profit
};