/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    s = s.split('')
    t = t.split('')
    let l = 0
    let r = 0
    while (r <= t.length - 1) {
        if (t[r] != s[l]) {
            r++
        }
        else {
            l++
            r++
        }
    }
    if (l == s.length) {
        return true
    }
    else {
        return false
    }

};