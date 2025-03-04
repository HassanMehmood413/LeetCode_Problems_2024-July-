/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
    let sum = 0
    let i = 1
    while (n) {
        let remainder = Math.floor(n % 3)
        if (n == 1 || n == 0) {
            return true
        }
        else if (remainder == 2) {
            return false
        }
        n = Math.floor(n / 3)
        console.log(n)
    }
    return false
};