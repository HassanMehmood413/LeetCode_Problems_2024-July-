/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let first = 0
    let end = s.length - 1

    while (first < end) {
        let temp = s[first]
        s[first] = s[end]
        s[end] = temp

        first++
        end--
    }
    return s

};