/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    dp = new Array(n + 1).fill(-1)
    let res = 0
    var stairs = function (n, dp, res) {
        if (n <= 1) {
            return 1
        }
        if (dp[n] != -1) {
            return dp[n]
        }
        dp[n] = stairs(n - 1, dp) + stairs(n - 2, dp)
        return dp[n]
    }
    return stairs(n, dp)

};