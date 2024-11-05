/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function (s) {
    let str = ''
    let count = 0
    for (let i = 0; i < s.length; i++) {
        str = str + s[i]
        if (str.length == 2 && str[0] != str[1]) {
            str[0] = str[1]
            count++
            str = ''
        }
        else if (str.length == 2) {
            str = ''
        }
    }
    return count
};