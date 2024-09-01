/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b)
    let left = 0
    let arr2 = []
    let min = Infinity
    let right = 1
    while (right <= arr.length - 1) {
        let a = Math.abs(arr[right] - arr[left])
        if (a <= min) {
            if (a < min) {
                arr2 = []
                arr2.push([arr[left], arr[right]])
            }
            else {
                arr2.push([arr[left], arr[right]])
            }
            min = a
        }
        left++
        right++

    }
    return arr2

};