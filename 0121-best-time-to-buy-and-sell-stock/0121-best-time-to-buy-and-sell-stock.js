/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = Infinity
    let max = -Infinity
    let left = 0
    let right = prices.length - 1
    while (left <= right) {
        if (prices[left] < min) {
            min = prices[left]
        }
        else {
            let a = prices[left] - min
            max = Math.max(max, a)
        }
        left++
    }
    return max == -Infinity ? 0 : max
};