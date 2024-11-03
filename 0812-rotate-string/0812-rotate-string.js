/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    let length = s.length
    for (let i = 0; i < length; i++) {
        n = s[0]
        s = s.slice(1)
        s = s + n
        if (s == goal) return true
    }
    return false
};