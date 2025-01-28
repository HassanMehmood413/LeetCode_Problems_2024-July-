/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
    let visit = new Set();
    let max = 0;

    var dfs = function (start, end) {

        if (start < 0 ||
            end < 0 ||
            start >= grid.length ||
            end >= grid[0].length ||
            grid[start][end] == 0 ||
            visit.has(`${start},${end}`)) {
            return 0
        }

        visit.add(`${start},${end}`);


        let count = grid[start][end]

        for (let [x, y] of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
            let first = x + start;
            let second = y + end;


            count += dfs(first, second)

        }

        return count
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] > 0 && !visit.has(`${i},${j}`)) {
                let all = dfs(i, j)
                max = Math.max(max, all);
            }
        }
    }
    return max
};