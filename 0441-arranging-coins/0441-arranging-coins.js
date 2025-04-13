/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let x = 2 * n + 0.25
    return Math.floor(-0.5 + Math.sqrt(x))
};