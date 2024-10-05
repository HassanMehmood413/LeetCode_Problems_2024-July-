/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s2.length < s1.length) return false
    let f1 = new Map()
    let f2 = new Map()
    for (let i = 0; i < s1.length; i++) {
        f1.set(s1[i], (f1.get(s1[i]) || 0) + 1)
        f2.set(s2[i], (f2.get(s2[i]) || 0) + 1)
    }

    if (Equal(f1, f2)) {
        return true
    }

    // Sliding Window
    for (let i = s1.length; i < s2.length; i++) {
        let cout = s2[i - s1.length]
        if (f2.get(cout) == 1) {
            f2.delete(cout)
        }
        else {
            f2.set(cout, f2.get(cout) - 1)
        }
        let cin = s2[i]
        f2.set(cin, (f2.get(cin) || 0) +
            1)

        if (Equal(f1, f2)) return true

    }
    return false
}

var Equal = function (map1, map2) {
    if (map1.size != map2.size) return false
    for (let [key, value] of map1) {
        if (value != map2.get(key)) return false
    }
    return true
}