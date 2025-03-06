/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let repeated_val = new Map()
    let most = 0
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            num = grid[i][j]
            repeated_val.set(num, (repeated_val.get(num) || 0) + 1);

            if (repeated_val.get(num) > count) {
                most = num
                count = repeated_val.get(num)
            }
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