/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    let str = ''
    let k = 3
    let org = 0
    for (let right = 0; right < s.length; right++) {
        str = str + s[right]
        if (str.length > k) {
            while (str.length > k) {
                str = str.slice(1)
            }
        }
        if (str.length == k) {

            if (str[0] != str[1] && str[1] != str[2] && str[0] != str[2]) {
                org++
            }
        }
    }
    return org
};