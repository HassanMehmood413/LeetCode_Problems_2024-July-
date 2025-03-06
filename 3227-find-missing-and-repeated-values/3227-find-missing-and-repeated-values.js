/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let repeated_val = new Set()
    let most = 0
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            num = grid[i][j]
            if (repeated_val.has(num)) {
                most = num
            }
            repeated_val.add(num)
        }
    }
    let c = grid.length * grid.length
    let su = 0
    repeated_val.forEach((m) => su += m)
    b = (c * (c + 1)) / 2 - su
    return [most, b]
};