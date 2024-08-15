/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    s = s.split("")
    let k = 3
    let str = ''
    for (let i = 0; i < k; i++) {
        str = str + s[i]
    }
    let count = 0
    str = str.split("")
    let l = 0
    for (let i = 0; i <= s.length - k; i++) {
        if (str[l] != str[l + 1] && str[l + 1] != str[l + 2] && str[l] != str[l + 2]) {
            count++
        }
        str.push(s[k + i])
        str.shift(0)
    }
    return count
};