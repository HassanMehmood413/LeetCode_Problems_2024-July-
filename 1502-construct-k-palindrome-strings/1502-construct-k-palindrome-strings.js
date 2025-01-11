/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
    if (s.length < k) return false
    let map = new Map()
    let total = 0
    s = s.split("")
    s.forEach((value) => {
        map.set(value, (map.get(value) || 0) + 1)
    })
    for (let [char, count] of map.entries()) {
        if (count % 2 !== 0) {
            total++
        }
    }
    if (total > k) return false
    return true
};