/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
    // dfs + cache + backtracking
    let every = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(-1));
    var dfs = function (start, end) {
        if (every[start][end] != -1) return every[start][end]
        maxmoves = 0
        for (let [x, y] of [[-1, 1], [0, 1], [1, 1]]) {
            let a = x + start
            let b = y + end
            if (a >= 0 && b >= 0 && a < grid.length && b < grid[0].length && grid[a][b] > grid[start][end]) {
                maxmoves = Math.max(maxmoves, 1 + dfs(a, b))
            }
        }
        every[start][end] = maxmoves
        return maxmoves
    }



    let maxmoves = 0
    for (let i = 0; i < grid.length; i++) {
        maxmoves = Math.max(maxmoves, dfs(i, 0))
    }
    return maxmoves
};