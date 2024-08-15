/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
    s = s.split(' ')
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (Number(s[i])) {
            arr.push(Number(s[i]))
        }
    }
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            count++
        }
    }
    if (count == arr.length - 1) {
        return true
    }
    else{
        return false
    }
};