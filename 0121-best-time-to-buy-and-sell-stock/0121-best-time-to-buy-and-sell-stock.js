/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = Infinity
    let profit = 0
    let ans = 0
    for (let i = 0; i < prices.length; i++) {
        let el = prices[i]
        if (el < min) {
            min = el
        }
        else {
            let check = el - min
            profit = Math.max(profit, check)
        }
    }
    return profit

};