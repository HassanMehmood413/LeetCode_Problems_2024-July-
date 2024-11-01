/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    let str = s[0]
    let l = 0
    for (let i = 1; i < s.length; i++) {
        if (s[i] != s[i - 1]) {
            str = str + s[i]
            l = 0
        }
        else {
            if (l < 1) {
                str = str + s[i]
                l++
            }
        }
    }
    return str
}
