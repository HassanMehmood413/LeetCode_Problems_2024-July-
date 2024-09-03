/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {

    res = ''
    for (let i = 0; i < s.length; i++) {
        res += s[i].charCodeAt() - 96
    }
    let i = 1
    res = res.split('')
    while (i <= k) {
        p = res.reduce((a, b) => {
            return Number(a) + Number(b)
        })
        res = p.toString().split('')
        i++
    }
    return p
};