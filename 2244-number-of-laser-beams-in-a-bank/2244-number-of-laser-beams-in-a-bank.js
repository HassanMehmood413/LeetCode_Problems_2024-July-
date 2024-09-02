/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let arr = [], count = 0
    for (let i = 0; i < bank.length; i++) {
        a = bank[i].split('')
        let p = a.filter((value) => {
            if (value == '1') {
                count++
            }
        })
        if (count != 0) {
            arr.push(count)
        }
        count = 0
    }
    let mul = 0
    let sum = 0
    let right = 1
    let left = 0
    while (left < arr.length - 1) {
        mul = arr[left] * arr[right]
        sum = sum + mul
        left++
        right++
    }
    return sum
};