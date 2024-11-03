/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    let max = 0
    let dp = Array.from({ length: matrix.length }, () => Array(matrix[0].length).fill(-1))
    var dfs = function (start, end) {
        if (dp[start][end] != -1) return dp[start][end]
        let sum = 1
        for (let [x, y] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
            let a = x + start
            let b = y + end
            if (a >= 0 && b >= 0 && a < matrix.length && b < matrix[0].length && matrix[start][end] < matrix[a][b]) {
                sum = Math.max(1 + dfs(a, b), sum)
            }
        }
        dp[start][end] = sum
        return dp[start][end]
    }


    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            max = Math.max(dfs(i, j), max)
        }
    }
    return max
};