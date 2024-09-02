/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
    num = num.toString().split("").sort()
    let left = 0
    let right = num.length - 1
    let b = 0
    while (left < right) {
        a = num[left].toString() + num[right].toString()
        b = b + Number(a)
        left++
        right--
    }
    return b
};