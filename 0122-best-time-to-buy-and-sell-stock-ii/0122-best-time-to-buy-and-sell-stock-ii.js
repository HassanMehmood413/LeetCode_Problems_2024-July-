/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (a) {
    let j = 1
    let max = 0
    let i = 0
    while (i <= a.length - 1) {

        if (a[i] < a[j]) {
            b = a[j] - a[i]
            max = b + max
            i++
            j++
        }

        else {
            i++
            j++
        }

    }
    return max
};