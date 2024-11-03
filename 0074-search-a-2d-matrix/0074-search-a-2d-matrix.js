/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let rows = matrix.length
    let cols = matrix[0].length
    let left = 0
    let right = rows * cols-1
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        let row = Math.floor(middle / cols)
        let col = Math.floor(middle % cols)
        let a = matrix[row][col]
        if (a == target) return true
        else if (a > target) right = middle - 1
        else left = middle + 1
    }
    return false





    // let arr = matrix.flat()
    // let left = 0
    // let right = arr.length - 1
    // while (left <= right) {
    //     let mid = Math.floor((left + right) / 2)
    //     if (arr[mid] == target) {
    //         return true
    //     }
    //     else if (arr[mid] > target) {
    //         right = mid - 1
    //     }
    //     else {
    //         left = mid + 1
    //     }
    // }
    // return false


    // Both have 0(m*n) Complexity:
    // let row = 0
    // let col = matrix[0].length - 1
    // while (row <= matrix.length - 1 && col >= 0) {
    //     let el = matrix[row][col]
    //     if (el == target) {
    //         return true
    //     }
    //     else if (el > target) {
    //         col--
    //     }
    //     else if (el < target) {
    //         row++
    //     }
    // }
    // return false




}