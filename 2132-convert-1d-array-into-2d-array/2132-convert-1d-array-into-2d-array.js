/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    if (m * n !== original.length) {
        return []
    }
    let res = []
    let org = []
    let index = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res.push(original[index])
            index++
        }
        org.push(res)
        res = []
    }
    return org








    // if (m == 1 && m * n == n) {
    //     max = Math.max(m, n)
    //     while (i < max) {
    //         res.push(original[i])
    //         i++
    //     }
    //     org.push(res)
    //     return org
    // }
    // else if (n == 1 && m * n == m) {
    //     max = Math.max(m, n)
    //     for (let i = 0; i < max; i++) {
    //         res.push(original[i])
    //         org.push(res)
    //         res = []
    //     }
    //     return org
    // }
    // else {
    //     i = 0
    //     max = Math.max(m,n)
    //     while (i < max ) {
    //         res.push(original[i])
    //         i++
    //     }
    //     org.push(res)
    //     res = []
    //     while (i < column) {
    //         res.push(original[i])
    //         i++
    //     }
    //     org.push(res)
    //     return org
    // }




};