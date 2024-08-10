/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    let row = new Map()
    let columns = new Map()
    for (let i = 0; i < grid.length; i++) {
        let concatenatedValue = grid[i].join(',');

        row.set(i, concatenatedValue);
    }
    let k = 0
    let add = ''
    for (let i = 0; i < grid.length; i++) {
        let add = []
        for (let j = 0; j < grid.length; j++) {
            add.push(grid[j][i])
        }
        columns.set(i, add.join(','))

    }
    array = Array.from(row.values())
    array2 = Array.from(columns.values())
    let count = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array[i] == array2[j]) {
                count++
            }

        }

    }
    return count
};