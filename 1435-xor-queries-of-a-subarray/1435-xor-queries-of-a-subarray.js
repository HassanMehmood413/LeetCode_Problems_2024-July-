/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    // Complexity : 0(n2)

    // let first = 0
    // let second = 1
    // let arr2 = []
    // let temp = 0
    // for (let i = 0; i < queries.length; i++) {
    //     for (let j = queries[i][first]; j <= queries[i][second]; j++) {
    //         temp = arr[j] ^ temp
    //     }
    //     arr2.push(temp)
    //     temp = 0
    // }
    // return arr2

    // Complexity : 0(n)
    let arr2 = []
    let temp = [0]
    for (let i = 1; i <= arr.length; i++) {
        temp[i] = temp[i - 1] ^ arr[i - 1]
    }
    console.log(temp)
    for (const [start, end] of queries) {
        arr2.push(temp[start] ^ temp[end + 1])
    }
    return arr2
}