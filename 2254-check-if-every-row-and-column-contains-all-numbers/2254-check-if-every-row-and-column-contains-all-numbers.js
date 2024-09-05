/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    let a = matrix.flat()
    let set = new Set(a)
    let row_count = 0
    let point = 0
    for (let i = 0; i < matrix.length; i++) {
        let check_set = new Set(matrix[i])
        if (check_set.size == set.size) {
            row_count++
        }
    }
    if (row_count == matrix.length) {
        point++
    }
    let column_count = 0
    let check_set2 = new Set()
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            check_set2.add(matrix[j][i])
        }
        if (check_set2.size == set.size) {
            column_count++
        }
        check_set2.clear()
    }
    if (column_count == set.size) {
        point++
    }
    return point == 2
};