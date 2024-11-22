/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
    let map = new Map()
    for (let i = 0; i < matrix.length; i++) {
        let newrow = matrix[i].map((item, index) => item == matrix[i][0] ? 0 : 1).join(',')
        if (map.has(newrow)) {
            map.set(newrow, map.get(newrow) + 1)
        }
        else {
            map.set(newrow, 1)
        }
    }
    let count = 0
    for (let [value, index] of map) {
        if (index > count) {
            count = Math.max(count, index)
        }
    }
    return count
};