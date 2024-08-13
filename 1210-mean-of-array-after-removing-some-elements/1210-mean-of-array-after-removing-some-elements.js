/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    // Both are same

    // arr.sort((a, b) => a - b)
    // length = arr.length * (5 / 100)
    // let i = 0
    // let j = 0
    // while (i < length) {
    //     arr.shift(j)
    //     i++
    // }
    // let l = arr.length - 1
    // while (j < length) {
    //     arr.pop(l)
    //     j++
    // }
    // let sum = 0
    // for (let i = 0; i < arr.length; i++) {
    //     sum = arr[i] + sum
    // }
    // return sum / arr.length

    arr.sort((a, b) => a - b)
    length = arr.length * 0.05

    let sum = 0
    for (let i = length; i < arr.length - length; i++) {
        sum = arr[i] + sum
    }
    return sum / (arr.length - length * 2)
};