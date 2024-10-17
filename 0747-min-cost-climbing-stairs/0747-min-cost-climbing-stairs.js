/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    var stairs = function (cost, n, dp) {
        if (n == 0) {
            return cost[0]
        }
        if (n == 1) {
            return cost[1]
        }
        if (dp[n] != -1) {
            return dp[n]
        }
        dp[n] = cost[n] + Math.min(stairs(cost, n - 1, dp), stairs(cost, n - 2, dp))
        return dp[n]
    }
    let n = cost.length
    let dp = new Array(n + 1).fill(-1)
    let ans = Math.min(stairs(cost, n - 1, dp), stairs(cost, n - 2, dp))
    return ans
};