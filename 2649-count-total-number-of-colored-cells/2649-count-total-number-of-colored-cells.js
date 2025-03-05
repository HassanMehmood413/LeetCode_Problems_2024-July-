/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
    let i = 1
    let last = n
    let sum = 1
    if (n == 1) return i
    while (last > 1) {
        i += 2
        sum = sum + i
        last--
    }
    while (i >= 1) {
        i--
        if (i % 2 != 0) {
            sum = sum + i
        }
    }
    return sum
};