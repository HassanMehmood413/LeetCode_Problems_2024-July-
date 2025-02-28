/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    // let dp = new Array(cost.length).fill(-1)
    // var again = function (i) {
    //     if (i >= cost.length) return 0
    //     if (dp[i] != -1) return dp[i]
    //     dp[i] = cost[i] + Math.min(again(i + 1), again(i + 2))
    //     return dp[i]
    // }
    // return Math.min(again(0), again(1))

    var again = function (n) {
        if (n == 0) return cost[0]
        if (n == 1) return cost[1]
        if (dp[n] != -1) return dp[n]

        dp[n] = cost[n] + Math.min(again(n - 1), again(n - 2))
        return dp[n]
    }
    let n = cost.length
    let dp = new Array(n + 1).fill(-1)
    let ans = Math.min(again(n - 1), again(n - 2))
    return ans


};