/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function (s, k) {

    let n = s.length
    s = s.split('')
    let str = ''
    for (let i = 0; i < s.length; i++) {
        a = (i + k) % n
        str = str + s[a]
    }
    return str

};