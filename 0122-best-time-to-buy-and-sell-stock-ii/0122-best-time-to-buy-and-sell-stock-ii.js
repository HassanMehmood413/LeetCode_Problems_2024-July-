/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let l = 0
    let r = 1
    let max = 0
    while (l <= prices.length - 1) {
        if (prices[l] < prices[r]) {
            let b = prices[r] - prices[l]
            max = max + b
            l++
            r++
        }
        else {
            l++
            r++
        }
    }
    return max
};