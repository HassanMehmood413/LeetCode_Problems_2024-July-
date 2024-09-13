/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    let first = 0
    let second = 1
    let arr2 = []
    let temp = 0
    for (let i = 0; i < queries.length; i++) {
        for (let j = queries[i][first]; j <= queries[i][second]; j++) {
            temp = arr[j] ^ temp
        }
        arr2.push(temp)
        temp = 0
    }
    return arr2
}