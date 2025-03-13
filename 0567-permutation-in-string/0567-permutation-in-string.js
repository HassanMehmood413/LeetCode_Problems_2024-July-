/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let str = ''
    s1 = s1.split('')
    let check = false
    let left = 0; right = 0
    let map1 = new Map()
    let map2 = new Map()

    for (let i = 0; i < s1.length; i++) {
        map1.set(s1[i], (map1.get(s1[i]) || 0) + 1)
        map2.set(s2[i], (map2.get(s2[i]) || 0) + 1)
    }
    console.log(map1, map2)

    if (Equal(map1, map2)) return true

    for (let i = s1.length; i < s2.length; i++) {
        let cout = s2[i - s1.length]
        if (map2.get(cout) == 1) {
            map2.delete(cout)
        }
        else {
            map2.set(cout, map2.get(cout) - 1)
        }
        let cin = s2[i]
        map2.set(cin, (map2.get(cin) || 0) + 1)
        if (Equal(map1, map2)) return true
    }
    return false

};

var Equal = function (map1, map2) {
    if (map1.size !== map2.size) return false
    for (let [key, value] of map1) {
        if (value !== map2.get(key)) return false
    }
    return true
}