/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    prices.sort((a, b) => a - b)
    let count = 0
    for (let i = 0; i < 1; i++) {
        a = prices[i] + prices[i + 1]
        if (a <= money) {
            money = money - a
        }
    }
    return money
};