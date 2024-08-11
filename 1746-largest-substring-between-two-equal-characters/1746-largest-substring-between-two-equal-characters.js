/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    s = s.split("")
    let map = new Map()
    let max = -1
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]))
            let length = i - map.get(s[i]) - 1
            if (length > max) {
                max = length
            }
        }
        else {
            map.set(s[i], i)
        }
    }
    return max
};