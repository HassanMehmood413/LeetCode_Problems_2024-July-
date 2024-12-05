/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
    if (start.replace(/_/g, "") !== target.replace(/_/g, "")) {
        return false
    }
    let l= 0, j = 0
    while (l < start.length && j < target.length) {
        while (start[l] == '_' && l < start.length) l++
        while (target[j] == '_' && j < target.length) j++

        if (l == start.length && j == target.length) return true
        if (l == start.length || j == target.length) return false

        if (start[l] !== target[j]) return false

        if (start[l] == 'L' && l < j) return false
        if (start[l] == 'R' && l > j) return false

        l++
        j++
    }
    return true
};