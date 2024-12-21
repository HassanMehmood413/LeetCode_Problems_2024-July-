/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function (s) {
    var again = function (start, prev, s) {
        if (start == s.length) {
            return true
        }
        for (let i = start; i < s.length; i++) {
            let val = parseInt(s.slice(start, i + 1), 10)
            if (val + 1 == prev && again(i + 1, val, s)) return true
        }
        return false
    }
    for (let i = 0; i < s.length - 1; i++) {
        let val = parseInt(s.slice(0, i + 1), 10)
        if (again(i + 1, val, s)) return true
    }
    return false
};