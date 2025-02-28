/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let dp = new Array(cost.length).fill(-1)
    var again = function (i) {
        if (i >= cost.length) return 0
        if (dp[i] != -1) return dp[i]
        dp[i] = cost[i] + Math.min(again(i + 1), again(i + 2))
        return dp[i]
    }
    return Math.min(again(0), again(1))
};