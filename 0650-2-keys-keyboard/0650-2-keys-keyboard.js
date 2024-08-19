/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
    if (n == 1) {
        console.log('0')
    }
    let num = 2
    sum = 0
    while (n > 1) {
        while (n % num == 0) {
            sum = sum + num
            n = n / num
        }
        num++
    }
    return sum
};