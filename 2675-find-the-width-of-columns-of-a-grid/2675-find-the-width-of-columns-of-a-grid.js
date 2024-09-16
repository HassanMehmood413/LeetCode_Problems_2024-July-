/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {

    let arr = []
    let an = []
    let max = 0
    for (let i = 0; i < grid[0].length; i++) {
        for (let j = 0; j < grid.length; j++) {
            max = Math.max(grid[j][i].toString().split('').length, grid[j][i].toString().split('').length)
            an.push(max)
        }
        arr.push(Math.max(...an))
        an = []
    }
    return arr
};