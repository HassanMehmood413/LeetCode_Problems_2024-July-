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
    let arr = grid.flat()
    let min = Math.min(...arr)
    if (min != 1) {
        return [most, 1]
    }
    let max = Math.max(...arr)
    let missing = max + 1
    let i = min
    while (i <= max) {
        if (!arr.includes(i)) {
            missing = i
        }
        i++
    }
    return [most, missing]

};