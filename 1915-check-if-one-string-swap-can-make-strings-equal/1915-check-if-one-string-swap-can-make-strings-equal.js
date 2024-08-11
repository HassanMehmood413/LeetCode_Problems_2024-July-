/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    if (s1 == s2 && s1.length == s2.length) {
        return true
    }
    let arr = []
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            arr.push(i)
        }
    }
    s2 = s2.split('')
    // for (let i = 0; i < arr.length; i += 2) {
    let temp = s2[arr[0]]
    s2[arr[0]] = s2[arr[0 + 1]]
    s2[arr[0 + 1]] = temp
    // }
    s2 = s2.join('')
    if (s2 == s1) {
        return true
    }
    else {
        return false
    }

};