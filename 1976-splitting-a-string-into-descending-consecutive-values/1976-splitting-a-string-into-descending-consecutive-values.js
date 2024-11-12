/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function (s) {
    var again = function (index, prev, s) {
        if (index == s.length) return true
        for (let i = index; i < s.length; i++) {
            let val = parseInt(s.slice(index, i + 1), 10)
            if (val + 1 == prev && again(i + 1, val, s)) return true
        }
        return false
    }
    for (let start = 0; start < s.length - 1; start++) {
        let val = parseInt(s.slice(0, start + 1), 10)
        if (again(start + 1, val, s)) return true
    }
    return false
};