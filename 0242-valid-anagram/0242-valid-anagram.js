/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    let map1 = new Map()
    let map2 = new Map()
    t = t.split("")
    s = s.split('')
    s.forEach((value) => {
        if (map1.has(value)) {
            map1.set(value, map1.get(value) + 1)
        }
        else {
            map1.set(value, 1)
        }
    })
    t.forEach((value) => {
        if (map2.has(value)) {
            map2.set(value, map2.get(value) + 1)
        }
        else {
            map2.set(value, 1)
        }
    })
    for (let [value, key] of map1) {
        if (map2.get(value) !== key) {
            return false
        }
    }
    return true


};