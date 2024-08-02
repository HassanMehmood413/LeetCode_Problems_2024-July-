/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function (s) {
    s = s.split('')
    count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
            count++
        }
    }
    if (count > 0) {
        return true
    }
    else {
        return false
    }
};