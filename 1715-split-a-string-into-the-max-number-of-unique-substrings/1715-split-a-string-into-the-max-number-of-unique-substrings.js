/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
    let set = new Set()
    var again = function (j, set, s) {
        if (j == s.length) {
            return 0
        }
        let res = 0
        for (let i = j; i < s.length; i++) {
            let str = s.slice(j, i + 1)
            if (set.has(str)) {
                continue
            }
            set.add(str)
            res = Math.max(res, 1 + again(i + 1, set, s))
            set.delete(str)
        }
        return res
    }
    return again(0, set, s)
};