/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    let map = {}
    var again = function (i, j) {
        if (j == t.length) return 1
        if (i == s.length) return 0
        let key = `${i},${j}`
        if (key in map) {
            return map[key]
        }
        if (s[i] == t[j]) {
            map[key] = again(i + 1, j + 1) + again(i + 1, j)
        }
        else {
            map[key] = again(i + 1, j)
        }
        return map[key]
    }
    return again(0, 0)
};