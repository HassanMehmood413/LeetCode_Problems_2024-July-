/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
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
    let row = 0
    let col = matrix[0].length - 1
    while (row <= matrix.length - 1 && col >= 0) {
        let el = matrix[row][col]
        if (el == target) {
            return true
        }
        else if (el > target) {
            col--
        }
        else if (el < target) {
            row++
        }
    }
    return false


}