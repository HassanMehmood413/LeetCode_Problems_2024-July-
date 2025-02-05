/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    if (s1 == s2) return true
    if (s1.length != s2.length) return false
    let count = 0
    let map1 = new Map();
    let map2 = new Map();
    s1 = s1.split('')
    s2 = s2.split('')
    s1.forEach((num) => {
        map1.set(num, (map1.get(num) || 0) + 1);
    });
    s2.forEach((num) => {
        map2.set(num, (map2.get(num) || 0) + 1);
    });
    for (let i = 0; i < s1.length; i++) {
        let first = map1.get(s1[i])
        let second = map2.get(s1[i])
        if (first !== second) return false
        if (s1[i] != s2[i]) count++
    }
    if (count == 2) return true
    return false
}