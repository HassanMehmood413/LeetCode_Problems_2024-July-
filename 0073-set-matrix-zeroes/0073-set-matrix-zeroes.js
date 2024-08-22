/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let arr = []
    for (let i = 0; i < matrix.length; i++) {
        let all_zeros = matrix[i].reduce((acc, value, index) => {
            if (value === 0) arr.push(index)
            return acc
        }, [])
        if (matrix[i].includes(0)) {
            matrix[i] = matrix[i].map((value) => value * 0)

        }
    }
    let i = 0
    while (arr.length != 0) {
        a = arr.shift()
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][a] = 0
        }
    }
    return matrix
};