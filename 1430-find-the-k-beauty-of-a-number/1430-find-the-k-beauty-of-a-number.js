/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
    let str = ''
    num = num.toString()
    let count = 0
    let left = 0
    let right = num.length - 1
    while (left <= right) {
        str = str + num[left]
        if (str.length == k) {
            let a = Number(num) / Number(str)
            if (Number.isInteger(a)) {
                count++
            }
            str = str.slice(1)

        }
        left++
    }
    return count
};