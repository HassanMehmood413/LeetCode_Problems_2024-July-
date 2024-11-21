/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
    let grid = Array.from({ length: m }, () => Array(n).fill(0));

    // Mark guards and walls as 2
    for (let [x, y] of [...guards, ...walls]) {
        grid[x][y] = 2;
    }


    // Mark guarded cells
    for (let [i, j] of guards) {
        for (let [x, y] of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {  // Directions: up, left, down, right
            let a = i;
            let b = j;
            while (true) {
                a += x;
                b += y;
                // Check boundaries and stop at walls or other guards
                if (a < 0 || a >= m || b < 0 || b >= n || grid[a][b] === 2) {
                    break;
                }
                grid[a][b] = 1;  // Mark the cell as guarded
            }
        }
    }

    // Count unguarded cells
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 0) {
                count++
            }
        }
    }
    return count


}


