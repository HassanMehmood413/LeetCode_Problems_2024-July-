/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    count = 0
    while (n > 0) {
        count += Math.floor(n / 5)
        n /= 5
    }
    return count


};