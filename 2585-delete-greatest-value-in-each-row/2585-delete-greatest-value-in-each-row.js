/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    res = []
    for (let i = 0; i < grid.length; i++) {
        grid[i].sort((a,b)=>a-b)
    }
    let element = []
    let sum = 0
    for (let i = 0; i < grid[0].length; i++) {
        for (let j = 0; j < grid.length; j++) {
            element.push(grid[j][i])
        }
        let max = Math.max(...element)
        sum = max + sum
    }
    return sum
};