/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    s = s.split("")
    let map = new Map()
    s.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1)
        }
        else {
            map.set(element, 1)
        }
    });
    let arr = Array.from(map.values())
    let i = arr[0]
    for (const j of arr) {
        if (i !== j) {
            return false
        }
    }
    return true
};