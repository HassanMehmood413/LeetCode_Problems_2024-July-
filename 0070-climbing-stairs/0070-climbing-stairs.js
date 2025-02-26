/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let count = 0
    let dp = new Array(n + 1).fill(-1)
    var again = function (n, dp) {
        if (n <= 1) return 1
        if (dp[n] != -1) return dp[n]
        dp[n] = again(n - 1, dp) + again(n - 2, dp)
        return dp[n]
    }
    return again(n, dp)
};