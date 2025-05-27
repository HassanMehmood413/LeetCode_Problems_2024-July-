/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    let sum1 = 0
    let sum2 = 0
    let first = n
    let second = n
    while (first >= 1) {
        if (first % m != 0) {
            sum1 += first
        }
        first--
    }
    while (second >= 1) {
        if (second % m == 0) {
            sum2 += second
        }
        second--
    }
    return sum1 - sum2

};