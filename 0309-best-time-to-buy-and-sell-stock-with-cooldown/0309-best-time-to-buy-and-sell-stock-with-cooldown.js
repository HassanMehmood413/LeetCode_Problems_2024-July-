/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let dp = {}
    var again = function (i, buying) {
        if (i >= prices.length) return 0
        let key = `${i}-${buying}`
        if (dp.hasOwnProperty(key)) {
            return dp[key]
        }
        let cooldown = again(i + 1, buying)
        if (buying) {
            let buy = again(i + 1, false) - prices[i]
            dp[key] = Math.max(buy, cooldown)
        }
        else {
            let sell = again(i + 2, true) + prices[i]
            dp[key] = Math.max(sell, cooldown)
        }
        return dp[key]
    }
    return again(0, true)
};