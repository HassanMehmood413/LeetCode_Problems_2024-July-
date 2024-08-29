/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let left = 0
    let right = Math.floor(Math.sqrt(c))
    let sum = 0
    while (left <= right) {
        let a = Math.pow(left, 2)
        let b = Math.pow(right, 2)
        sum = a + b
        if (sum == c) {
            return true
        }
        else if (sum < c) {
            left++
        }
        else {
            right--
        }
    }
    return false
};