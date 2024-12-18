/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    let res = []
    let isvalid = true
    for (let i = 0; i < prices.length; i++) {
        let l = i + 1
        while ((prices[i] < prices[l])) {
            l++
            if (l >= prices.length) {
                isvalid = false
                break
            }
        }
        if (isvalid == false || l >= prices.length) {
            res.push(prices[i])
            isvalid = true
        }
        else {
            res.push(prices[i] - prices[l])
        }
    }
    return res
};