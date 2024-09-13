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


    // Correct Code:
    let col = matrix[0].length - 1
    let row = 0
    while (col >= 0 && row <= matrix.length - 1) {
        let el = matrix[row][col]
        if (el == target) {
            return true
        }
        else if (el > target) {
            col--
        }
        else if(el < target){
            row++
        }
    }
    return false
};