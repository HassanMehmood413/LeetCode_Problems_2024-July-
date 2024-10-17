/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let dp = new Array(n + 1).fill(-1)
    var fib = function (n, dp) {
        if (n <= 1) {
            return n
        }
        if (dp[n] != -1) {
            return dp[n]
        }
        dp[n] = fib(n - 1, dp) + fib(n - 2, dp)
        return dp[n]
    }

    return fib(n, dp)
};