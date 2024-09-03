/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    t = (s + s).slice(1, -1)
    return t.includes(s)









    // Attempt 1:

    // sl = Math.floor(s.length / 2)
    // let str = ''
    // for (let i = 0; i < sl; i++) {
    //     str = str + s[i]
    // }
    // for (let i = 0; i < sl; i++) {
    //     str = str + s[i]
    // }
    // return str == s

    // Attemp 2:

    // t = Math.floor(s.length / 2)
    // let str = ''
    // for (let i = 0; i < t; i++) {
    //     str = str + s[i]
    // }
    // if (str + str == s) {
    //     return true
    // }
    // else {
    //     return false
    // }
};