/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    ans = 1
    nn = n
    if (nn < 0) {
        nn = nn * -1
    }
    while (nn != 0) {
        if (nn % 2) {
            ans = ans * x
            nn = nn - 1
        }
        else {
            x = x * x
            nn = Math.floor(nn / 2)
        }
    }
    if (n < 0) {
        ans = 1 / ans
    }
    return ans
};